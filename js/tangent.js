var tangent = {
	version: '0.0.1'
};

(function(tangent) {

	var components = {},
		controllers = {};

	var app = function () {

		if ((this instanceof app) === false ) {
			return Object.create(app.prototype);
		}
	};

	var fn = app.prototype = {};

	fn.boot = function() {
		for (var c in components) {
			this.findComponentsByName(c);
		}
	};

	fn.getComponents = function() {
		for (var c in components) {
			console.log(components[c]());
  		}

		return components;
	};

	fn.registerComponent = function(name, func) {
		var comp = {
			name: name,
			func: func
		}

		components[name] = func;
	};	

	fn.findComponentsByName = function(name) {
		var attrsObject = {};
		var componentList = document.querySelectorAll(name);
		var componentArray = Array.prototype.slice.call(componentList);

		for (i = 0; i < componentArray.length; i++) {
			var el = componentArray[i];
			var attrs = Array.prototype.slice.call(el.attributes);

			for (var attr in attrs) {
				attrsObject[attrs[attr].nodeName] = attrs[attr].nodeValue;
			}

			var controller = controllers[components[name]().controller];

			if (typeof controller !== 'function') {
				controller = function(){};
			}

			components[name]().render(el, attrsObject, controller());
		}

		return componentArray;
	};

	fn.controller = function(name, func) {
		var ctrl = {
			name: name,
			func: func
		}

		controllers[name] = func;
	};

	app.prototype.constructor = app;
	tangent.app = app;

}(tangent));

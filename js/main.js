var app = tangent.app();

app.component('rpm-panel', function() {
	var panelAttr = 123;

	var render = function(element, attrs, controller) {
		if (attrs.changeable.toString() === 'true') {
			var fieldset = document.createElement('fieldset');
			element.appendChild(fieldset);
		}
	}

	return {
		render: render,
		controller: 'testController'
	}
});

app.component('rpm-input', function() {

	var render = function(element, attrs, controller) {
		var textInput = document.createElement('input');
		textInput.setAttribute('type', 'text');
		textInput.value = controller.model.artist;
		textInput.value += ' = ' +controller.model.album;

		element.appendChild(textInput);
	}

	return {
		render: render,
		controller: 'testController'
	}
});

app.controller('testController', function() {

	var model = {
		artist: "Radiohead",
		album: "OK Computer"
	}

	return {
		model: model
	}

});

app.boot(); 
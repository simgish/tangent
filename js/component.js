(function(tangent) {

	var component = function(name, func) {
		this.registerComponent(name, func);
	}

	tangent.app.prototype.component = component;

}(tangent));
var app = tangent.app();

app.component('rpm-panel', function() {
	var panelAttr = 123;

	var render = function(element, attrs) {
		if (attrs.changeable.toString() === 'true') {
			element.innerHTML = 'new text!';
		}
	}

	return {
		render: render
	}
});

app.directive('calcElem', [function () {
	return {
		template: `<a ui-sref='calc' class="btn btn-2 calc-nav">Current BAC Calculator</a>`,
		restrict: 'E'
	};
}])
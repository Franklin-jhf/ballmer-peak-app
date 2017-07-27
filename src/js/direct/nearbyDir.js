app.directive('nearbyElem', [function () {
	return {
		restrict: 'E',
		template: `<a ui-sref='nearby' class="btn btn-2 nearby-nav">Alcohol Nearby</a>`
	};
}])
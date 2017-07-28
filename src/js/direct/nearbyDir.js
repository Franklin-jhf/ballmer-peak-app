app.directive('nearbyElem', [function () {
	return {
		restrict: 'E',
		template: `<a ui-sref='nearby' id='mapListener' class="btn btn-2 nearby-nav">Alcohol Nearby</a>`
	};
}])
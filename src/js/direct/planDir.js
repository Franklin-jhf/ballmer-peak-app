app.directive('planElem', [function () {
	return {
		restrict: 'E',
		template: `<a ui-sref='plan' class="btn btn-2 plan-nav">Plan It Out</a>`
	};
}])
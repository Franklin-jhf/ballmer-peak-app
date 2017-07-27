app.directive('aboutElem', [function () {
	return {
		template: `<a ui-sref='about' class="btn btn-2 about-nav">About</a>`,
		restrict: 'E',
		scope: {
			navChange: '&'
		},
		link: function(scope, elems, attrs) {
			
		}
	};
}])
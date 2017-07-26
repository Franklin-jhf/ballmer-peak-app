app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url:'about', 
			templateUrl: '../views/about.html'
		})
		.state('nearby', {
			url:'nearby',
			templateUrl: '../views/nearby.html'
		})
		.state('plan', {
			url:'plan',
			templateUrl: '../views/plan.html'
		});
})
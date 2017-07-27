app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'/home', 
			templateUrl: 'src/views/home.html'
		})
		.state('about', {
			url:'/about', 
			templateUrl: 'src/views/about.html'
		})
		.state('calc', {
			url:'/BACcalculator', 
			templateUrl: 'src/views/calc.html',
			controller: 'calcCtrl'
		})
		.state('nearby', {
			url:'/nearby',
			templateUrl: 'src/views/nearby.html'
		})
		.state('plan', {
			url:'/plan',
			templateUrl: 'src/views/plan.html'
		});
	$urlRouterProvider
		.otherwise('/home');
})
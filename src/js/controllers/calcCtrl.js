app.controller('calcCtrl', function ($scope, mainSrvc) {
	$scope.calc = mainSrvc.calc;
	
	$scope.calculate = function() {
		$scope.result = $scope.calc($scope.alcVol, $scope.alcConcentration, $scope.weight, $scope.gender, $scope.time);
	}
})
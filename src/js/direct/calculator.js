app.directive('calculator', [function () {
	return {
		restrict: 'EA',
		templateUrl: 'src/views/calcForm.html'
	};
}])

// calculate='calc({alcVol}, {alcConcentration}, {weight}, {gender}, {time})'
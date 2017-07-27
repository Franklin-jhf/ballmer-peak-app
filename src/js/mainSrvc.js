app.service('mainSrvc', [function () {
	this.calc = (alcAmt, alcConcentation, weight, gender, time) => {
		var percent = alcAmt * alcConcentation * 5.14 / weight;
		if (gender === 'male') {percent *= 0.73};
		if (gender === 'female') {percent *= 0.66};
		return percent - 0.015 * time;
	}
}])
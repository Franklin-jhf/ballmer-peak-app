app.service('mainSrvc', [function ($http) {

	// CALCULATOR FUNCTION
	this.calc = (alcAmt, alcConcentration, weight, gender, time) => {
		var percent = alcAmt * alcConcentration / 100 * 2 * 5.14 / weight;
		if (gender === 'male') {percent *= 0.73};
		if (gender === 'female') {percent *= 0.66};
		return (percent - 0.015 * time).toFixed(3);
	}

}])
var SolarSystem = (function(oldSolarSystem){
	const stars = ["random star", "another star", "big star", "small star"];
	
	oldSolarSystem.getStars = function () {
		return stars;
	}

	oldSolarSystem.setstars = function (newStar){
		stars.push(newStar);
	}

	

	return oldSolarSystem
})(SolarSystem || {});
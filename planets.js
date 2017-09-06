var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	
	oldSolarSystem.getPlanets = function () {
		return planets;
	}

	oldSolarSystem.setPlanets = function (newPlanet){
		planets.push(newPlanet);
	}

	

	return oldSolarSystem
})(SolarSystem || {});


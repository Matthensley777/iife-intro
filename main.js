// function moreCrap () {

// }

// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];
// 	oldSomething.niceFunction = function () {
// 		console.log("im a nice function")
// 	}
// 	return oldSomething;

// })(Something || {});

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	const spaceCraft = ["challenger", "enterprise", "death star"];
	
	oldSolarSystem.getPlanets = function () {
		return planets;
	}

	oldSolarSystem.setPlanets = function (newPlanet){
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpaceCraft = function () {
		return spaceCraft;
	}

	oldSolarSystem.setSpaceCraft = function (newSpaceCraft) {
		spaceCraft.push(newSpaceCraft)
	}

	return oldSolarSystem
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
	console.log("myPlanets", myPlanets);
	
SolarSystem.getSpaceCraft();


var SolarSystem = (function(oldSolarSystem){
	const spaceCraft = ["challenger", "enterprise", "death star"];
	
	
	oldSolarSystem.getSpaceCraft = function () {
		return spaceCraft;
	}

	oldSolarSystem.setSpaceCraft = function (newSpaceCraft) {
		spaceCraft.push(newSpaceCraft)
	}

	return oldSolarSystem
})(SolarSystem || {});
	
SolarSystem.getSpaceCraft();

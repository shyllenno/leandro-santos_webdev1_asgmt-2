document.addEventListener("DOMContentLoaded", () => {

	loadCities();
});

function loadCities(){
	const cities = new Set;
	Object.keys(weatherData).forEach(city => {
		cities.add(
			city.replace(/_daily|_hourly/g, "")
			.replace("_"," ")
			.replace(/\b\w/g,char => char.toUpperCase())
			);
	});
};
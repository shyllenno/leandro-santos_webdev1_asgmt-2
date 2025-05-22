document.addEventListener("DOMContentLoaded", () => {

	loadCities();
});

function loadCities(){
	Object.keys(weatherData).forEach(key => {
		console.log(key.replace(/_daily|_hourly/g, "").replace("_"," ").replace(/\b\w/g,char => char.toUpperCase()).map.set(key));

	})
}
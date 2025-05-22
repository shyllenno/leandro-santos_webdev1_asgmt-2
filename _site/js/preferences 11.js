document.addEventListener("DOMContentLoaded", () => {

	loadCities();
});

function loadCities(){
	Object.keys(weatherData).forEach(key => {
		console.log(key.replace("_daily|_hourly", "").replace(/\b\w/g,char => char.toUpperCase()));

	})
}
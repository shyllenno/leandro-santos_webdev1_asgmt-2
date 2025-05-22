document.addEventListener("DOMContentLoaded", () => {

	loadCities();
});

function loadCities(){
	Object.keys(weatherData).forEach(key => {
		console.log(key);

	})
}
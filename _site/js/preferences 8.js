document.addEventListener("DOMContentLoaded", () => {

	loadCities();
});

function loadCities(){
	Object.keys(weather_data).forEach(key => {
		console.log(key);

	})
}
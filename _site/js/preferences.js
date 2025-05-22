document.addEventListener("DOMContentLoaded", () => {

  // Appends the toggle button to each city in the data
  appendToggleCities();

  // Adds the click event in each toggle button
  addEventSetFaveOnClick();

});


// Global variable to hold a set of uniques cities based on the weather_data.js
const cities = new Set;
Object.keys(weatherData).forEach(city => {
  cities[
      city.replace(/_daily|_hourly/g, "")] =
    city.replace(/_daily|_hourly/g, "").replace("_", " ")
    .replace(/\b\w/g, char => char.toUpperCase());
});


// Function to append the toggle buttons to each city in the data
function appendToggleCities() {

  const setFavouritesContainer = document.getElementById("set-favourites-container");

  Object.entries(cities).sort().forEach( ([key, value]) => {
    setFavouritesContainer.innerHTML += `
      <div class="city-toggle-container">
      <label class="switch" for="cb-${key}">
        <input type="checkbox" id="cb-${key}"><span class="slider round"></span>
      </label>
      <p class="toggle-label">${value}</p>
      </div>
  `;
  });
};

// Add the event on click to each toggle button
function addEventSetFaveOnClick() {

  Object.keys(cities).forEach(key => {

    const cb = document.getElementById(`cb-${key}`);

    const state = localStorage.getItem(`${key}`);

    cb.checked = state == "true";

    cb.addEventListener("click", () => {
      console.log(cb.checked);
      localStorage.setItem(`${key}`, cb.checked);
    });
  });
};
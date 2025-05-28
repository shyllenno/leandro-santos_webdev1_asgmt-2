document.addEventListener("DOMContentLoaded", () => {

  // Appends the toggle buttons to each city in the data in the set favourites panel
  appendToggleCities();

  // Adds the click event in each toggle button
  addEventSetFaveOnClick();

  // Appends the toggle buttons to the set preference panel
  appendTogglePreferences();

  clearEvents();

});

/*
  ############## SET FAVOURITES CITIES ##############
*/
// Global variable to hold a set of uniques cities based on the weather_data.js
const cities = new Set;
Object.keys(weatherData).forEach(city => {
  cities[city.replace(/_daily|_hourly/g, "")] =
    city.replace(/_daily|_hourly/g, "")
    .replace("_", " ")
    .replace(/\b\w/g, char => char.toUpperCase());
});


// Function to append the toggle buttons to each city in the data in the set favourites panel
function appendToggleCities() {

  const setFavouritesContainer = document.getElementById("set-favourites-container");

  Object.entries(cities).sort().forEach(([key, value]) => {
    setFavouritesContainer.appendChild(whetherWeatherSpace.components.toggleButton(key, value));
  });
};

// Add the event on click to each toggle button
function addEventSetFaveOnClick() {

  Object.keys(cities).forEach(key => {

    const cb = document.getElementById(`cb-${key}`);

    const state = localStorage.getItem(`${key}`);

    cb.checked = state === "true";

    cb.addEventListener("click", () => {
      console.log(cb.checked);
      localStorage.setItem(`${key}`, cb.checked);
    });
  });
};

/*
  ############## SET PREFERENCES ##############
*/

// Function to append the toggle buttons to set preferences panel
function appendTogglePreferences() {
  const setPreferencesContainer = document.getElementById("set-preferences-container");

  // Sets the Fahrenheit toggle button
  setPreferencesContainer.appendChild(whetherWeatherSpace.components.toggleButton("fahrenheit", "Show temperatures as ºF"));
  fahrenheitToggle = document.getElementById("cb-fahrenheit");

  // Gets gets the state of the toggle
  fahrenheitToggle.checked = localStorage.getItem("pref-fahrenheit") === "true";

  // Adds the event listener on click
  fahrenheitToggle.addEventListener("click", () => { localStorage.setItem("pref-fahrenheit", fahrenheitToggle.checked); });


  // Sets the MPH toggle button
  setPreferencesContainer.appendChild(whetherWeatherSpace.components.toggleButton("mph", "Show wind speeds as MPH"));
  mphToggle = document.getElementById("cb-mph");
  mphToggle.checked = localStorage.getItem("pref-mph") === "true";
  mphToggle.addEventListener("click", () => { localStorage.setItem("pref-mph", mphToggle.checked); });


  // Sets the show sunrise-sunset toggle
  setPreferencesContainer.appendChild(whetherWeatherSpace.components.toggleButton("ux-sunrise-sunset-hide", "Hide sunrise & sunset"));
  uxSunriseSunsetToggle = document.getElementById("cb-ux-sunrise-sunset-hide");
  uxSunriseSunsetToggle.checked = localStorage.getItem("pref-ux-hide-sunrise-sunset") === "true";
  uxSunriseSunsetToggle.addEventListener("click", () => {
    localStorage.setItem("pref-ux-hide-sunrise-sunset", uxSunriseSunsetToggle.checked);
  });
}

// Adds the clear event on both favourites and preferences panels
function clearEvents() {

  // Sets the clear buttons
  const clearEls = document.querySelectorAll("[id^=clear-]");
  clearEls.forEach(clearEl => clearEl.addEventListener("click", () => {
    if (clearEl.id.replace("clear-", "") === "preferences") {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("pref-") && key !== "lastCity") {
          localStorage.removeItem(key);
        };
      });
    } else {
      Object.keys(localStorage).forEach(key => {
        if (!key.startsWith("pref-") && key !== "lastCity") {
          localStorage.removeItem(key);
        };
      });
    }
    location.reload();
  }));

  // Sets the reset cockies button
  document.getElementById("reset-cockies").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
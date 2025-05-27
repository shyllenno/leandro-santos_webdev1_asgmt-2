/* JS for global conversions such as Celsius to Faherint and Km/h to Mph */

// Get local storage settings for degrees and speed measurements (it will default to false if the local storage keys where not found)
const isFahrenheit = localStorage.getItem("pref-fahrenheit") ? localStorage.getItem("pref-fahrenheit") : "false";
const isMph = localStorage.getItem("pref-mph") ? localStorage.getItem("pref-mph") : "false";

// Converts the degree from Celsius to Fahrenheit if that is toggled
function getDegree(temperature) {
  if (isFahrenheit === "true") {
    return (temperature * 9 / 5 + 32).toFixed(2) + "ºF";
  } else {
    return temperature + "ºC";
  }
}

// Converts the speed from km/h to mph if that is toggled
function getSpeed(speed) {
  if (isMph === "true") {
    return (speed / 1.609344).toFixed(2) + " mph";
  } else {
    return speed + " km/h";
  }
}
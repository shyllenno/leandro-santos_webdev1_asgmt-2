/* JS for global conversions such as Celsius to Faherint and Km/h to Mph */

// Get local storage settings for degrees and speed measurements
const isFahrenheit = localStorage.getItem("fahrenheit") ? localStorage.getItem("fahrenheit") : "true";
const isMph = localStorage.getItem("mph") ? localStorage.getItem("mph") : "true";

// Converts the degree from Celsius to Fahrenheit if that is toggled
function getDegree(temperature){
  if(isFahrenheit === "true"){
    return (temperature * 9 / 5 + 32).toFixed(2) + "ºF";
  } else {
    return temperature + "ºC";
  }
}

// Converts the speed from km/h to mph if that is toggled
function getSpeed(speed){
  if(isMph === "true"){
    return (speed / 1.609344).toFixed(2) + " mph"; 
  } else {
    return speed + " km/h";
  }
}
/* The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
    without waiting for stylesheets, images, and subframes to finish loading.
    The load event, on the other hand, fires when the entire page, including all dependent resources such 
    as stylesheets, scripts, images, and subframes, has fully loaded.

    So, in this case, should I use DOMContentLoaded or Load, as I am appeding elements to the HTML? 
    Answering my own question: DOMContentLoaded is the correct, because I need that the initial HTML be 
    ready for starting selecting their elements and then append child elements.
*/


/* Event listener to run a anonymous function to append child elements and update the variables after the
   initial HTML document has been completely loaded and parsed
*/

document.addEventListener("DOMContentLoaded", () => {

  /*
  On the first load, it will load the "Amsterdam" data, thereafter, the last city loaded will be stored
  in the local storage, and it will be retrieved on the next load.
  */
  const lastCity = localStorage.getItem("lastCity") ? localStorage.getItem("lastCity") : "amsterdam";

  /* If the page comes from the dashboard, it will come with url parameters */
  const urlParams = new URLSearchParams(window.location.search);
  const cityName = urlParams.get('city');


  /* Therefore, we compare which city the page should render */
  let cityToLoad = "";

  if (cityName !== null) {
    cityToLoad = cityName;
  } else {
    cityToLoad = lastCity;
  }

  // Add the favourite star
  addFaveStar();

  // Updated the ID for the favourite star
  document.getElementById("fave-").id = "fave-" + cityToLoad;

  // Sets the selected city to display
  document.getElementById("city").value = cityToLoad;

  // Marks the star checked if it is a favourite in the local storage
  getFaveStarsOnLoad();

  // Adds the click event listener on the stars to checked/unchecked then in the local storage
  addEventFaveStarsOnClick();

  // Creates the 7 days forecast columns stats
  appendDailyStats();

  /* Update the weather based on the selected city, in this case, with the lastCity above, as this is just 
  the start state of the webpage */
  updateWeather(cityToLoad);

  /* Displaying the right-side-header panel, which holds the right now weather details */
  document.querySelector("#right-side-header").style.display = "initial";

});
  
/* Function to update the weather based on the user choice from the dropdown menu */
function updateWeather(selectedCity) {

   const urlmenu = document.getElementById('city');
    urlmenu.onchange = function() {
      window.location = this.options[this.selectedIndex].value;
    };

  // Updates the local storage with the selected city from the dropdown menu
  localStorage.setItem("lastCity", selectedCity);

  // Gathers data for TODAY's variables, the MAIN window stats (Today's Icon, Max Temp and Max Wind)
  const currentCityDataDaily = weatherData[selectedCity + "_daily"];
  const maxTemp = document.getElementById("max-temp");
  const maxWind = document.getElementById("max-wind");
  const city = document.getElementById('city');
  const weatherIcon = document.getElementById('weather-icon');

  // Calls the function displayCityName to display the correct city name
  city.innerText = displayCityName[selectedCity + "_daily"];

  maxTemp.innerText = getDegree(currentCityDataDaily.daily.temperature_2m_max[0]);
  maxWind.innerText = getSpeed(currentCityDataDaily.daily.wind_speed_10m_max[0]);
  weatherIcon.src = getWeatherIcon(currentCityDataDaily.daily.weather_code[0]);

  // Gets the current hour using DayJS
  const currentTime = dayjs();
  const currentHour = currentTime.hour();

  // Gather data for hourly variables, the RIGHT NOW window stats
  const currentCityDataHourly = weatherData[selectedCity + '_hourly'];
  const rightNowTempEl = document.getElementById('right-now-temp');
  const rightNowWindEl = document.getElementById('right-now-wind');
  const rightNowTimeEl = document.getElementById('right-now-time');
  rightNowTempEl.innerText = getDegree(currentCityDataHourly.hourly.temperature_2m[currentHour]);
  rightNowWindEl.innerText = getSpeed(currentCityDataHourly.hourly.wind_speed_10m[currentHour]);
  rightNowTimeEl.innerText = '@ ' + currentTime.format("h:mm A");

  // Gather data for the 7 DAYS FORECAST window
  for (i = 0; i < 7; i++) {
    const elDailyStatsWeekday = document.querySelector("#card-title-" + i);
    elDailyStatsWeekday.innerText = currentTime.add(i, "day").format("dddd");

    const elDailyStatsImg = document.querySelector(".card-img-" + i);
    elDailyStatsImg.src = getWeatherIcon(currentCityDataDaily.daily.weather_code[i]);

    const elDailyStatsTemp = document.querySelector(".card-temp-" + i);
    elDailyStatsTemp.innerText = getDegree(currentCityDataDaily.daily.temperature_2m_max[i]);

    const elDailyStatsWind = document.querySelector(".card-wind-" + i);
    elDailyStatsWind.innerText = getSpeed(currentCityDataDaily.daily.wind_speed_10m_max[i]);
    
  }
}

// Key Value pair object based on the data to hold the correct city names to display
const displayCityName = {}
Object.keys(weatherData)
  .forEach(city => displayCityName[city] = city
    .replace(/_daily|_hourly/g, "") // 1st remove _daily or _hourly from the city
    .replace("_", " ") // 2nd replace a underscore by a space
    .replace(/\b\w/g, char => char.toUpperCase()) // 3rd switch to upper case of each 1st character
  );

// Appends the card for each day of the week for 7 days inclusive of today
function appendDailyStats() {

  dailyForecastContainer = document.querySelector('.weather-stats-container');

  for (let i = 0; i < 7; i++) {
    dailyForecastContainer.appendChild(whetherWeatherSpace.components.singleCard(i));
  }
}

// Add a star icon
function addFaveStar(){
  const starContainer = document.querySelector(".layer-1-title");
  starContainer.insertBefore(whetherWeatherSpace.components.starIcon(),starContainer.firstChild);
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  const drop = document.getElementById("myDropdown");
  drop.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
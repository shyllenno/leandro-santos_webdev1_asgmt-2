/* Event listener to run a anonymous function to append child 
    elements and update the variables after the initial HTML 
    document has been completely loaded and parsed
*/
document.addEventListener("DOMContentLoaded", () => {

  // Appends the boxes
  appendFaveBox();

  // Marks the star checked if it is a favourite in the local storage
  getFaveStarsOnLoad();



  // Reloads the page if the star is clicked (in this case, unchecked)
  reloadPageOnFaveClick();

  // Adds the click event listener on the city name to redirect to the selected city-page 
  addEventGoToCityOnClick();


  // Adds the click event listener on the stars to checked/unchecked then in the local storage
  addEventFaveStarsOnClick();

});

// Function to reload the page if a star is clicked (in this case, unchecked)
function reloadPageOnFaveClick() {
  document.querySelectorAll("[id^=fave-").forEach(star => {
    star.addEventListener("click", (event) => {
      event.stopPropagation();
      location.reload();
    })
  })
};

// Function to add an event click to redirect to the select city when clicking in the city card
function addEventGoToCityOnClick() {
  const cityCard = document.querySelectorAll(".weather-stats-card:has([id^=card-title-])");

  cityCard.forEach(card => {
    const cityCardName = card.querySelector("[id^=card-title-]").id.replace("card-title-", "");
    card.addEventListener("click", (event) => {
      window.location = "/?city=" + cityCardName;
    });
  });
}


// Function to append the boxes for each city marked as favourite
function appendFaveBox() {

  dailyForecastContainer = document.querySelector('.weather-stats-container');

  // A set to keep all unique cities ordered
  const cities = new Set();

  /* Helper to count how many favourite cities with value equal to "true" has been found, 
  as for some reason, the size on set is returning 0 (zero)*/
  let faveCount = 0;

  Object.entries(localStorage).forEach(([key, value]) => {
    /* This IF Statement excludes the local storage keys that are attributed to the 
    preferences pane (preffix: "pref-") and the cities that are not favourite */
    if (!key.startsWith("pref-") && value === "true") {
      cities[key] = value;
      faveCount++;
    }
  });


  // Gets the current hour using DayJS
  const currentHour = dayjs().hour();


  Object.entries(cities).sort().forEach(([key, value]) => {

    const currentCityDataDaily = weatherData[key + "_daily"];
    dailyForecastContainer.appendChild(whetherWeatherSpace.components.singleCard(key));

    const elDailyStatsWeekday = document.querySelector("#card-title-" + key);
    elDailyStatsWeekday.innerText = key.replace("_", " ").replace(/\b\w/g, char => char.toUpperCase());

    const elDailyStatsImg = document.querySelector(".card-img-" + key);
    elDailyStatsImg.src = getWeatherIcon(currentCityDataDaily.daily.weather_code[0], currentHour);

    const elDailyStatsTemp = document.querySelector(".card-temp-" + key);
    elDailyStatsTemp.innerText = getDegree(currentCityDataDaily.daily.temperature_2m_max[0]);

    const elDailyStatsWind = document.querySelector(".card-wind-" + key);
    elDailyStatsWind.innerText = getSpeed(currentCityDataDaily.daily.wind_speed_10m_max[0]);

    const boxContainer = document.querySelector(".weather-stats-card:has(#card-title-" + key + ")");
    // boxContainer.innerHTML = `
    //       <div id="star-container">
    //         <button>
    //           <span id="star-icon" class="icon is-small is-size-5">
    //             <i id="fave-" class="fa-regular fa-star"></i>
    //           </span>
    //         </button>
    //       </div>
    //     ` + boxContainer.innerHTML;

    boxContainer.insertBefore(whetherWeatherSpace.components.starIcon(), boxContainer.firstChild);

    document.getElementById("fave-").id = "fave-" + key;
  });

  if (faveCount === 0) {
    document.querySelector('.weather-stats-container').innerHTML = `<h3 id="no-fave">There are no cities marked as favourite yet!</h3>`;
  }
}
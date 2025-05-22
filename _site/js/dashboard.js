/* Event listener to run a anonymous function to append child 
    elements and update the variables after the initial HTML 
    document has been completely loaded and parsed
*/
document.addEventListener("DOMContentLoaded", () => {

  // Appends the boxes
  appendFaveBox();

  // Marks the star checked if it is a favourite in the local storage
  getFaveStarsOnLoad();

  // Adds the click event listener on the stars to checked/unchecked then in the local storage
  addEventFaveStarsOnClick();

  // Reloads the page if the star is clicked (in this case, unchecked)
  reloadPageOnFaveClick();

  // Adds the click event listener on the city name to redirect to the selected city-page 
  addEventGoToCityOnClick();

});

// Function to reload the page if a star is clicked (in this case, unchecked)
function reloadPageOnFaveClick() {
  document.querySelectorAll("[id^=fave-").forEach(star => {
    star.addEventListener("click", () => {
      location.reload();
    })
  })
};

// Function to redirect to the select city
function addEventGoToCityOnClick() {
  const cityCard = document.querySelectorAll("[id^=card-title-]");

  cityCard.forEach(card => {
    const cityCardName = card.id.replace("card-title-", "");
    card.addEventListener("click", (event) => {
      window.location = "/?city=" + cityCardName;
    });
  });
}


// Function to append the boxes for each city marked as favourite
function appendFaveBox() {
  const cities = new Set();
  Object.entries(localStorage).forEach(([key, value]) => {
    cities[key] = value;
  });

  dailyForecastContainer = document.querySelector('.daily-stats-container');

  let faveCount = 0;

  Object.entries(cities).sort().forEach(([key, value]) => {

    if (value === "true") {
      faveCount++;

      const currentCityDataDaily = weatherData[key + "_daily"];
      dailyForecastContainer.appendChild(whetherWeatherSpace.components.singleCard(key));

      const elDailyStatsWeekday = document.querySelector("#card-title-" + key);
      elDailyStatsWeekday.innerText = key.replace("_", " ").replace(/\b\w/g, char => char.toUpperCase());

      const elDailyStatsImg = document.querySelector(".card-img-" + key);
      elDailyStatsImg.src = getWeatherIcon(currentCityDataDaily.daily.weather_code[0]);

      const elDailyStatsTemp = document.querySelector(".card-temp-" + key);
      elDailyStatsTemp.innerText = getDegree(currentCityDataDaily.daily.temperature_2m_max[0]);

      const elDailyStatsWind = document.querySelector(".card-wind-" + key);
      elDailyStatsWind.innerText = getSpeed(currentCityDataDaily.daily.wind_speed_10m_max[0]);

      const boxContainer = document.querySelector(".daily-stats-box:has(#card-title-" + key + ")");
      boxContainer.innerHTML = `
          <div id="star-container">
            <button>
              <span id="star-icon" class="icon is-small is-size-5">
                <i id="fave-" class="fa-regular fa-star"></i>
              </span>
            </button>
          </div>
        ` + boxContainer.innerHTML;

      document.getElementById("fave-").id = "fave-" + key;
    }
  });

  if (faveCount === 0) {
    document.querySelector('.daily-stats-container').innerHTML = `<p id="no-fave">There are no cities marked as favourite yet!</p>`;
  }
}
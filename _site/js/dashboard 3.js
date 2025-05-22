/* Event listener to run a anonymous function to append child 
    elements and update the variables after the initial HTML 
    document has been completely loaded and parsed
*/
document.addEventListener("DOMContentLoaded", () => {

  appendFaveBox();

  getFaveOnLoad();

  addEventFaveOnClick();

  addEventGoToCityOnClick();

  reloadPageOnFaveClick();

});

function reloadPageOnFaveClick() {
  document.querySelectorAll("[id^=fave-").forEach(star => {
    star.addEventListener("click", () => {
      location.reload();
    })
  })
}

function addEventGoToCityOnClick() {
  const cityCard = document.querySelectorAll("[id^=card-title-]");

  cityCard.forEach(card => {
    const cityCardName = card.id.replace("card-title-", "");
    card.addEventListener("click", (event) => {
      window.location = "/?city=" + cityCardName;
    });
  });
}

function appendFaveBox() {
  dailyForecastContainer = document.querySelector('.daily-stats-container');

  let faveCount = 0;

  Object.entries(localStorage).forEach(key => {
    if (key[1] === "true") {
      faveCount++;

      const currentCityDataDaily = weatherData[key[0] + "_daily"];
      dailyForecastContainer.appendChild(whetherWeatherSpace.components.singleCard(key[0]));

      const elDailyStatsWeekday = document.querySelector("#card-title-" + key[0]);
      elDailyStatsWeekday.innerText = key[0].replace("_", " ").replace(/\b\w/g, char => char.toUpperCase());

      const elDailyStatsImg = document.querySelector(".card-img-" + key[0]);
      elDailyStatsImg.src = getWeatherIcon(currentCityDataDaily.daily.weather_code[0]);

      const elDailyStatsTemp = document.querySelector(".card-temp-" + key[0]);
      elDailyStatsTemp.innerText = currentCityDataDaily.daily.temperature_2m_max[0] + "ºC";

      const elDailyStatsWind = document.querySelector(".card-wind-" + key[0]);
      elDailyStatsWind.innerText = currentCityDataDaily.daily.wind_speed_10m_max[0] + " km/h";



      const boxContainer = document.querySelector(".daily-stats-box:has(#card-title-" + key[0] + ")");
      boxContainer.innerHTML = `
          <div id="star-container">
            <button>
              <span id="star-icon" class="icon is-small is-size-5">
                <i id="fave-" class="fa-regular fa-star"></i>
              </span>
            </button>
          </div>
        ` + boxContainer.innerHTML;

      document.getElementById("fave-").id = "fave-" + key[0];
    }
  });

  if (faveCount === 0) {
    document.querySelector('.daily-stats-container').innerHTML = `<p id="no-fave">There are no cities marked as favourite yet!</p>`;
  }
}
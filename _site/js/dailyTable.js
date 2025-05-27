document.addEventListener("DOMContentLoaded", () => {
  




  // Constants to retrieve the data for
  const city = "san_francisco";
  const day = "6";

  // Updates the page title with the city name
  document.querySelector("#city").innerHTML = city.replace("_", " ").replace(/\b\w/g, char => char.toUpperCase());
  
  // Updates the page subtitle with the week day name
  document.querySelector("#day").innerHTML = dayjs().add(day, "day").format("dddd");



  // Data retrieved
  const cityDataHourly = weatherData[city + '_hourly'];

  // Append table rows
  const tableBody = document.querySelector("tbody");

  const tableRows = [];
  const regexTodayHour = new RegExp(`TodayT|Today\\+${day}T`,"g");
  let strHour;

  for(let i = day * 24; i < day * 24 + 24; i++){
    strHour = cityDataHourly.hourly.time[i].replace(regexTodayHour, "");
    intHour = parseInt(strHour.substring(0,2),10);
        tableRows[i] = 
        `<tr>
            <td>${strHour}</td>
            <td><img src="${getWeatherIcon(cityDataHourly.hourly.weather_code[i], intHour)}" alt="Weather forecast image"}/></td>
            <td>${getDegree(cityDataHourly.hourly.temperature_2m[i])}</td>
            <td>${getSpeed(cityDataHourly.hourly.wind_speed_10m[i])}</td>
        </tr>`
  }

  // Append main container with a table
  const container = document.querySelector(".daily-stats-container");

  container.innerHTML = 
    `<div class="column is-8">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Time</th>
            <th></th>
            <th>Temperature</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join(" ")}
        </tbody>
      </table>
    </div>`
});
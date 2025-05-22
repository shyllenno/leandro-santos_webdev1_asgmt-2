// Key Value pair array to hold the images address
// This is version 1
// TODO: create a full array to also hold the title/subject for the figure and the alt attribute
  // make it global
const weatherImages = {
  0: '/images/0-day.svg',
  2: '/images/2-day.svg',
  3: '/images/3.svg',
  45: '/images/45-day.svg',
  48: '/images/48-day.svg',
  53: '/images/53-day.svg',
  57: '/images/57.svg',
  63: '/images/63-day.svg',
  65: '/images/65.svg',
  77: '/images/77.svg',
  81: '/images/81-day.svg',
  82: '/images/82.svg',
  85: '/images/85-day.svg',
  86: '/images/86.svg',
  95: '/images/95.svg',
  96: '/images/96-day.svg',
  99: '/images/99.svg'
}

// Function to retrive the icon address based on the weather code passed as argument
function getWeatherIcon(weatherCode) {
  let weatherCodeIcon;
  for (const [key, value] of Object.entries(weatherImages)) {
    if (weatherCode <= parseInt(key)) {
      weatherCodeIcon = value;
      break;
    }
  }
  return weatherCodeIcon;
}
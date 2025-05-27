// Key Value pair array to hold the images address
// This is version 1
// TODO: create a full array to also hold the title/subject for the figure and the alt attribute
// make it global
const weatherImagesDay = {
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

const weatherImagesNight = {
  0: '/images/0-night.svg',
  2: '/images/2-night.svg',
  3: '/images/3.svg',
  45: '/images/45-night.svg',
  48: '/images/48-night.svg',
  53: '/images/53-night.svg',
  57: '/images/57.svg',
  63: '/images/63-night.svg',
  65: '/images/65.svg',
  77: '/images/77.svg',
  81: '/images/81-night.svg',
  82: '/images/82.svg',
  85: '/images/85-night.svg',
  86: '/images/86.svg',
  95: '/images/95.svg',
  96: '/images/96-night.svg',
  99: '/images/99.svg'
}

// Function to retrive the icon address based on the weather code passed as argument
function getWeatherIcon(weatherCode, hour) {
  let weatherCodeIcon;

  // This will select the appropriated collection of key-value pairs based on the time of the day
  for (const [key, value] of Object.entries(hour >= 7 && hour < 18 ? weatherImagesDay : weatherImagesNight)) {
    if (weatherCode <= parseInt(key)) {
      weatherCodeIcon = value;
      break;
    }
  }
  return weatherCodeIcon;
}

const windDirectionImages = {
  N: "/images/windD--N.png",
  NNE: "/images/windD--NNE.png",
  NE: "/images/windD--NE.png",
  ENE: "/images/windD--ENE.png",
  E: "/images/windD--E.png",
  ESE: "/images/windD--ESE.png",
  SE: "/images/windD--SE.png",
  SSE: "/images/windD--SSE.png",
  S: "/images/windD--S.png",
  SSW: "/images/windD--SSW.png",
  SW: "/images/windD--SW.png",
  WSW: "/images/windD--WSW.png",
  WSW: "/images/windD--WSW.png",
  WNW: "/images/windD--WNW.png",
  NW: "/images/windD--NW.png",
  NNW: "/images/windD--NNW.png"
}

// Function to retrieve the cardinal direction image
function getWindDirectionImage(windDirectionCode) {
  let windDirectionImage;

  switch (true) {
    case windDirectionCode >= 0 && windDirectionCode <= 11.25:
      windDirectionImage = windDirectionImages.N;
      break;
    case windDirectionCode > 11.25 && windDirectionCode <= 33.75:
      windDirectionImage = windDirectionImages.NNE;
      break;
    case windDirectionCode > 33.75 && windDirectionCode <= 56.25:
      windDirectionImage = windDirectionImages.NE;
      break;
    case windDirectionCode > 56.25 && windDirectionCode <= 78.75:
      windDirectionImage = windDirectionImages.ENE;
      break;
    case windDirectionCode > 78.75 && windDirectionCode <= 101.25:
      windDirectionImage = windDirectionImages.E;
      break;
    case windDirectionCode > 101.25 && windDirectionCode <= 123.75:
      windDirectionImage = windDirectionImages.ESE;
      break;
    case windDirectionCode > 123.75 && windDirectionCode <= 146.25:
      windDirectionImage = windDirectionImages.SE;
      break;
    case windDirectionCode > 146.25 && windDirectionCode <= 168.75:
      windDirectionImage = windDirectionImages.SSE;
      break;
    case windDirectionCode > 168.75 && windDirectionCode <= 191.25:
      windDirectionImage = windDirectionImages.S;
      break;
    case windDirectionCode > 191.25 && windDirectionCode <= 213.75:
      windDirectionImage = windDirectionImages.SSW;
      break;
    case windDirectionCode > 213.75 && windDirectionCode <= 236.25:
      windDirectionImage = windDirectionImages.SW;
      break;
    case windDirectionCode > 236.25 && windDirectionCode <= 258.75:
      windDirectionImage = windDirectionImages.WSW;
      break;
    case windDirectionCode > 258.75 && windDirectionCode <= 281.25:
      windDirectionImage = windDirectionImages.WSW;
      break;
    case windDirectionCode > 281.25 && windDirectionCode <= 303.75:
      windDirectionImage = windDirectionImages.WNW;
      break;
    case windDirectionCode > 303.75 && windDirectionCode <= 326.25:
      windDirectionImage = windDirectionImages.NW;
      break;
    case windDirectionCode > 326.25 && windDirectionCode <= 348.75:
      windDirectionImage = windDirectionImages.NNW;
      break;
    case windDirectionCode > 348.75 && windDirectionCode <= 360:
      windDirectionImage = windDirectionImages.N;
      break;
  }
  return windDirectionImage;
}
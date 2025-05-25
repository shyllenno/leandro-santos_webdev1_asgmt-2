// Star styles
const favouriteStyle = 'fa-solid fa-star checked';
const notFavouriteStyle = 'fa-regular fa-star'

// Marks the star checked if it is a favourite on load
function getFaveStarsOnLoad() {
  const star = document.querySelectorAll("[id^=fave-]").forEach(star => {
    const isFave = localStorage.getItem(star.id.replace("fave-", "")) === "true";
    star.className = isFave ? favouriteStyle : notFavouriteStyle;
  })
}

// Function to the get and set the favourite through the click event in the star
function addEventFaveStarsOnClick() {

  // Add event listeners in the favourite stars
  document.querySelectorAll("[id^=fave-]").forEach(star => {
    star.addEventListener('click', (event) => {
      event.stopPropagation();
      const starElement = event.target;
      const starName = starElement.id.replace("fave-", "");
      const isAlreadyFavourite = localStorage.getItem(starName) === 'true';
      const isNowFavourite = !isAlreadyFavourite;

      star.className = isNowFavourite ? favouriteStyle : notFavouriteStyle;
      localStorage.setItem(starName, isNowFavourite);
    })
  });
}
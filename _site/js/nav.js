/*
  Script to deal with other Navbar functions, apart from the Bulma JS given script to deal with the navbar items and burger
*/

document.addEventListener('DOMContentLoaded', () => {
  // Gets the page href on load
  const pageUrl = location.href;

  // Gets each anchor tag href and compares it against the page href, if it is equal, it marks the page as active
  document.querySelectorAll(".navbar-end>a").forEach(el => {
    if (el.href === pageUrl) {
      el.classList.add("is-active");
    }
  });
});
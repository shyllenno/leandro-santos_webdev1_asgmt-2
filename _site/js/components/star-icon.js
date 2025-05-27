/* 
  This component returns a single, star icon.
  This is a reusable star
  In future improvements, it can be flexible, receiving as a parameter the icon type and its properties
*/

whetherWeatherSpace.components.starIcon = () => {

  // Create the outer container using a Div "star-container"
  const starContainer = document.createElement("div");
  // Insert the classes
  starContainer.className = "star-container";

  // Create the inner container using a button
  const buttonEl = document.createElement("button");

  // Create the span element
  const spanEl = document.createElement("span");
  // Insert the ID and classes
  spanEl.id = "star-icon";
  spanEl.className = "icon is-small is-size-5";

  // Create the icon element
  const iEl = document.createElement("i");
  // Insert the ID and classes
  iEl.id = "fave-";
  iEl.className = "fa-regular fa-star";

  // Append the elements together
  spanEl.appendChild(iEl);
  buttonEl.appendChild(spanEl);
  starContainer.appendChild(buttonEl);

  return starContainer;

}
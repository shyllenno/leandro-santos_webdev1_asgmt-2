/* This component returns a single, toggle button, which receives the ID, and the display text
    
    This is a reusable toggle button
*/

whetherWeatherSpace.components.toggleButton = (id, text) => {

  // Create the outer container using a Div "toggle-container"
  const toggleContainer = document.createElement("div");
  // Insert the classes
  toggleContainer.className = "toggle-container";


  // Create the inner container using a Label
  const labelEl = document.createElement("label");
  // Insert the classes and other attributes
  labelEl.className = "switch";
  labelEl.setAttribute("for", "cb-" + id);

  // Create the input element
  const inputEl = document.createElement("input");
  // Insert the ID and other attributes
  inputEl.setAttribute("type", "checkbox");
  inputEl.id = "cb-" + id;

  // Create the span element
  const spanEl = document.createElement("span");
  // Insert the classes
  spanEl.className = "slider round";

  // Create the paragraph element to be used as label
  const pEl = document.createElement("p");
  // Insert the classes
  pEl.className = "toggle-label";
  // Pass the text to be displayed
  pEl.innerText = text;

  // Append the elements together
  labelEl.appendChild(inputEl);
  labelEl.appendChild(spanEl);
  toggleContainer.appendChild(labelEl);
  toggleContainer.appendChild(pEl);

  return toggleContainer;

}
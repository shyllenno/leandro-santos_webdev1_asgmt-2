  /* This component returns a single, general weather card, consisting of a title, an image, 
      and 2 paragraphs, one for the Temperature, and another for the Wind

      This is a reusable card

      It has been applied in the focus-city page, where 7 cards are shown for the weekly
        forecast, and in the dashboard, creating city specific cards */
  
whetherWeatherSpace.components.singleCard = (index) => {

    // Create the outer container "column" which will hold the each day weather stats
    const elSectionColumn = document.createElement("section");
    // Insert the classes
    elSectionColumn.className = "column is-narrow is-centered"; // this is-4 is for dashboard only! to be remove in city-focus


    // Create the inner container "box"
    const elDivBox = document.createElement("div");
    // Insert the classes
    elDivBox.className = "weather-stats-card box has-background-black has-text-white has-text-centered";

    const elPTitle = document.createElement("p");
    elPTitle.className = "mb-3";
    elPTitle.id = "card-title-" + index;

    const elDivFigure = document.createElement("div");
    const elFigure = document.createElement("figure");
    elFigure.className = "image is-64x64 is-inline-block";

    const elImg = document.createElement("img");
    elImg.className = "card-img-" + index;

    const elDivDailyStats = document.createElement("div");
    elDivDailyStats.className = "columns is-vcentered";

    const elDivPTemp = document.createElement("div");
    elDivPTemp.className = "column"

    const elPTemp = document.createElement("p");
    elPTemp.className = "card-temp-" + index;

    const elDivPWind = document.createElement("div");
    elDivPWind.className = "column";

    const elPWind = document.createElement("p");
    elPWind.className = "card-wind-" + index;


    elSectionColumn.appendChild(elDivBox);
    elDivBox.appendChild(elPTitle);
    elDivBox.appendChild(elDivFigure).appendChild(elFigure).appendChild(elImg);
    elDivBox.appendChild(elDivDailyStats);
    elDivDailyStats.appendChild(elDivPTemp).appendChild(elPTemp);
    elDivDailyStats.appendChild(elDivPWind).appendChild(elPWind);

    return elSectionColumn;

  }
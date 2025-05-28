# Welcome to the (Whether)Weather - Your Weather App Whenever and Wherever You Are!  

## Overview  

The (Whether)Weather App provides an easy all-in-one weather forecast, allowing the user to bookmark favourite cities to always keep an eye on his/her dashboard.  

This website was developed for the second assignment of the ***Higher Diploma in Computer Science*** course of the ***South East Technological University*** – SETU, applying the learnings of HTML, CSS, and JavaScript learnt through the ***Web Development 1*** module, lectured by ***John Rellis***.  

However, this project tries to mimic a real website, it loads a hardcoded data, meaning that the values shown are outdated, as we haven't covered yet how to request and use data out of the internet.  

Several tools were applied to the project to make it compliant with the W3C specifications and accessibility guidelines (blind/colour contrast only).  

Due to limitations and knowledge, this project still has "room" for lots of improvements.  

## Usage & Features  

The website is accessable through https://leandro-santos-webdev1-asgmt-2.netlify.app/  

The website contains 3 main pages, ***"Home"***, ***"Dashboard"***, and ***"Settings"***, which can be accessed through the navigation bar, and 1 sub-page ***"daily-table"***, which is accessed through one of the 7-days cards in the home page.  

**Pages overview**  

- The ***"Home"*** page features a single city forecast details (city-focus), showing the maximum temperature for the day with the pertinent icon for the forecast and the maximum wind for the day with the pertinent wind direction icon. It also shows the forecast for the current time ("maximum" temperature & wind) in the "Right Now" pane on the right, and the forecast for the next 6 days, including today, displayed in a card format one for each day, each card display the weekday name, the forecast icon, the "maximum" temperature and wind, the feels-like temperature, and the sunrise and sunset time, each card being clickable, which will bring the user to the daily-table page for the specific day.
- - On the first load, it will load the default:
- - - The forecast data for Amsterdam, and thereafter , it will load either the last city or the city passed through the url parameter. Cities can be selected/changed through the dropdown menu. The user can also bookmark the current city, which will then be displayed in the "Dashboard" page.  
- - - Temperatures in Celsius Degrees (it can be changed to Fahrenheit Degrees later);  
- - - Wind speeds in Km/h (it can be changed to MPH later);  
- - - Sunrise and Sunset time (it can be hidden later);  
- The ***"Dashboard"*** page where bookmarked cities will be shown, in a card display style and ordered alphabetically, showing the City name, and the forecast details "maximum" temperature and wind for the day. Each card is clickable, which will brind the user to the city-focus (home) page for the selected city. Directly from the Dashboard, the user can also unmarked the city as favourite.  
- - The ***Settings*** page has 2 sections of settings, the first one to set the favourite cities, and the second one to set the preferences such as switch to Fahrenheit, MPH, and hide the sunrise and sunset from the focus-city (home) page. The setting page also allows for partial and full resets, the user can "clear" only the favourites, or the preferences, and "reset cockies", which will clear all the local storage.
- - The ***"daily-table"*** page, which is a sub-page from the "City-Focus (home)" page, which is accessible through one of the 7-days cards and also through the right now pane, will display in a table format the forecast data for the full day, from time "00:00" to "23:00", including the forecast icom, the "maximum" temperature, feels like temperature, and "maximum" wind speed.  

Note: The maximum words above double-quoted means that the word itself was dropped for the sake of saving space.

## Technologies Used  

Frontend: HTML, CSS, Bulma, 11ty/Eleventy, Nunjucks  

Backend: JavaScript    

Hosting: Netlify  pushed through GitHub

Validation tools:  

- [W3C Markup Validation Service](https://validator.w3.org/)  
- [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)  
- [WAVE Web Accessibility Evaluation Tool (Google extension)](https://wave.webaim.org/extension/)  
- [Accessibility Checker](https://www.accessibilitychecker.org/)  

## Contributors  

Leandro de Oliveira Santos - HDip in CS Student at SETU.  

## Acknowledgments  

This README.md followed the template from the Github user "comp1800" – [web_template](https://github.com/comp1800/web_template). Thank you, comp1800.  
Thank you to all that have been listed in this project reference.  
Thank you, Professor ***John Rellis***, for the incredible lectures.  

## Limitations and Future Work  

### Limitations  

This website was 100% developed based on a screen resolution of **1920 x 1080 pixels (FHD)**, as this resolution is the most commom. Although, the assignment specifications didn't mention about the need of responsiveness; this project uses Bulma framework to surcuven the CSS, Bulma does implements the responsiviness by itself, however, it might happen that few styles don't show properly in smaller screens, this project tried to captured any unintended behaviour using the media query in the CSS stylesheets.

Also, during the validations, errors coming from the use of Bulma framework were found, those errors were not treated, therefore, they might be thrown out again by validation services.

### Future Work  

This project can be improved in many ways, for example:  

- Fetch real-time data for any city.  
- Add more graphical data, for example, showing a graph for the hourly weather forecast.  
- Add a month-data forecast.  
- Add more user interactions like the ability to show/hide the sunrise-sunset, for example, giving the user to show/hide the feel like element, or change the icons, or theme, and lots more...  

## License
There is no license attributed to this project, but this project is live on [Netlify](https://leandro-santos-webdev1-asgmt-2.netlify.app/) and on my [GitHub](https://github.com/shyllenno/leandro-santos_webdev1_asgmt-2) account.  

## Project Structure  
```
(Whether)Weather App
│   daily-table.html
│   dashboard.html
│   index.html
│   preferences.html
│   README.md
│
├───css
│       city-focus.css
│       daily-table.css
│       dashboard.css
│       footer.css
│       header.css
│       nav.css
│       preferences.css
│       styles.css
│       weather-card.css
│
├───data
│       amsterdam_daily.json
│       amsterdam_hourly.json
│       berlin_daily.json
│       berlin_hourly.json
│       complete_data.json
│       copenhagen_daily.json
│       copenhagen_hourly.json
│       cork_daily.json
│       cork_hourly.json
│       data-definition.pdf
│       new_york_daily.json
│       new_york_hourly.json
│       paris_daily.json
│       paris_hourly.json
│       san_francisco_daily.json
│       san_francisco_hourly.json
│       test.html
│       tromso_daily.json
│       tromso_hourly.json
│       waterford_daily.json
│       waterford_hourly.json
│       weather_data.js
│
├───images
│       0-day.svg
│       0-night.svg
│       2-day.svg
│       2-night.svg
│       3.svg
│       45-day.svg
│       45-night.svg
│       48-day.svg
│       48-night.svg
│       53-day.svg
│       53-night.svg
│       57.svg
│       63-day.svg
│       63-night.svg
│       65.svg
│       77.svg
│       81-day.svg
│       81-night.svg
│       82.svg
│       85-day.svg
│       85-night.svg
│       86.svg
│       95-day.svg
│       95-night.svg
│       95.svg
│       96-day.svg
│       96-night.svg
│       99.svg
│       images_data.js
│       logo.png
│       sunrise.svg
│       sunset.svg
│       windD--E.png
│       windD--ENE.png
│       windD--ESE.png
│       windD--N.png
│       windD--NE.png
│       windD--NNE.png
│       windD--NNW.png
│       windD--NW.png
│       windD--S.png
│       windD--SE.png
│       windD--SSE.png
│       windD--SSW.png
│       windD--SW.png
│       windD--W.png
│       windD--WNW.png
│       windD--WSW.png
│
└───js
    │   bulma.js
    │   city-focus.js
    │   conversions.js
    │   daily-table.js
    │   dashboard.js
    │   nav.js
    │   preferences.js
    │   starFavorite.js
    │   whether-weather-space.js
    │
    └───components
            star-icon.js
            toggle-button.js
            weather-card.js
```

## References  

[The Weather is Nice Today icon pack] url(https://www.iconfinder.com/iconsets/the-weather-is-nice-today)  

[Maps - Cardinais Directions] url(https://icons8.com/icons/set/maps--style-ios)  

[How to center image in Bulma] url(https://stackoverflow.com/questions/48277473/center-image-in-bulma)  

[How to create and append HTML elements with JavaScript] url(https://www.w3schools.com/jsref/met_document_createelement.asp)  

[How TO - Toggle Switch] url(https://www.w3schools.com/howto/howto_css_switch.asp)  

[How to deploy to Netlify using GitHub] url(https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)  

[How to format number to 2 decimal places in JavaScript] url(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)  

[How to Stack Elements in CSS] url(https://css-tricks.com/how-to-stack-elements-in-css/)  

[How to make overlapping click events to stop on the first event] url(https://stackoverflow.com/questions/23490103/two-onclick-events-overlap)  

[Stop Propagation of Events] url(https://www.javascripttutorial.net/dom/events/stop-propagation-of-events/)  

[How TO - Clickable Dropdown] url(https://www.w3schools.com/howto/howto_js_dropdown.asp)  

[Bulma: how to nicely mark in navbar the current tab of website I'm in?] url(https://stackoverflow.com/questions/68240803/bulma-how-to-nicely-mark-in-navbar-the-current-tab-of-website-im-in)  

[Toggle (Hide/Show) an Element] url(https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)  
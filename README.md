# Javascript Project

## Objective

The project's named 'Aliens are Real' or 'UFO project'. Despite the strange its content may be, its main objective is to build dynamic tables using HTML, CSS, Javascript and DS languages.

Project is composed by two sub-projects:

### 1. UFO-level-1

Files:

* index.html            Presentation HTML page
* static/js/data.js     UFO observations data to be displayed
* static/js/app.js      Javascript file managing all logic to display data and filter by date

Description

* A basic HTML web page or use the index.html  to display UFO observations. Data 

* Using the UFO dataset (data.js) in the form of an array of JavaScript objects, the code appends a table to web page and then adds new rows of data for each UFO sighting.

* Columns in table are date/time, city, state, country, shape, and comment.

* A date form in HTML document and JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

### 2. UFO-level-2

Files
* index.html            Presentation HTML page
* static/js/data.js     UFO observations data to be displayed
* static/js/app.js      Javascript file managing all logic to display data and filter by date
* static/js/filter.js   Javascript file managing select drop-down lists and filtering logic


Description

* Using #1 criteria to load data

* Using multiple input select dropdowns so that user can set multiple filters (datetime, city, state, country, and shape) to search for UFO sightings.

## Prerrequisites
* Start HTTP server using python comman: python -m http.server.   Default location is localhost (127.0.0.1) and port 8000
* To visualize your webpages in your browser:
    
    <b>UFO-level-1</b>
     Type http://localhost:8000/UFO-level-1/

     <b>UFO-level-2</b>
     Type http://localhost:8000/UFO-level-2/



## Styling

HTML pages are styled using static/css/style.css file
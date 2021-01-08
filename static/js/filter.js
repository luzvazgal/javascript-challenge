//Defining boolean variables to determine which drop-down filter was selected first
var isDatetime = false
var isCity = false
var isState = false
var isCountry = false
var isShape = false

/**
 * Loading all Data in index.html
 */
function load_and_fillData()
{
    console.log("Get data")

    //Calling loadData() function to load data in HTML page
    loadData()
    
    /** DATETIME SELECT */
    setDropdownList(1, "date_time")

    /** CITY SELECT */
    setDropdownList(2, "city")
    
    /** STATE SELECT */
    setDropdownList(3, "state")

    /** COUNTRY SELECT */
    setDropdownList(4, "country")

    /** SHAPE SELECT */
    setDropdownList(5, "shape")
}

/**
 * 
 * @param  listNum  The select list to be displayed: 1 - datetime, 2 - city, 3 - state, 4 - country, 5 - shape
 * @param  idName The select id name in HTML to be set
 */
function setDropdownList(listNum, idName)
{
    //Filling all select objects, by getting all available dates in data in 'option' object
    list = tableData.map(function getDate(rec){
        switch(listNum){
            case 1:
                return "<option>" + rec.datetime + "</option>"
            case 2:
                return "<option>" + rec.city + "</option>"
            case 3:
                return "<option>" + rec.state + "</option>"
            case 4:
                return "<option>" + rec.country + "</option>"
            case 5:
                return "<option>" + rec.shape + "</option>"
        }
        
    })

    //Setting the first item in select list to '----'
    list.splice(0,0,"<option> ---- </option>")
    
    //Ensuring only unique values are displayed
    document.getElementById(idName).innerHTML = [...new Set(list.sort())];
}

/**
 * When user select a specific date to filter data, the rest of lists in case user hasn't selected 
 * anything previously, are retrieving values according to selected date. Otherwise, the list will
 * keep user selection in the other lists.
 */
function selectDatetime()
{
    isDatetime = true

    let selectedDate = document.getElementById("date_time").value
    console.log("Selected date "+selectedDate+ " "+isCity)

    tableData = data.filter(record => record.datetime == selectedDate)


    /*Setting the rest of filters according to selectedDate in case the user hasn't selected any of
    the other lists previously*/

    /** CITY SELECT */
    if (!isCity) setDropdownList(2, "city");
    
    /** STATE SELECT */
    if (!isState) setDropdownList(3, "state");

    /** COUNTRY SELECT */
    if (!isCountry) setDropdownList(4, "country");

    /** SHAPE SELECT */
    if (!isShape) setDropdownList(5, "shape");

}

/**
 * When user select a specific city to filter data, the rest of lists in case user hasn't selected 
 * anything previously, are retrieving values according to selected date. Otherwise, the list will
 * keep user selection in the other lists.
 */
function selectCity()
{
    isCity = true

    let selectedCity = document.getElementById("city").value
    console.log("Selected city "+selectedCity+" "+isDatetime)

    tableData = data.filter(record => record.city == selectedCity)


    /*Setting the rest of filters according to selectedDate in case the user hasn't selected any of
    the other lists previously*/

    /** DATETIME SELECT */
    if (!isDatetime) setDropdownList(1, "date_time");
    
    /** STATE SELECT */
    if (!isState) setDropdownList(3, "state");

    /** COUNTRY SELECT */
    if (!isCountry) setDropdownList(4, "country");

    /** SHAPE SELECT */
    if (!isShape) setDropdownList(5, "shape");

}


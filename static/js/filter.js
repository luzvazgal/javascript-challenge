

/**
 * If one of any of select items is clicked, it will call getData function to fill all filters with
 * data coming from data.js
 */

function load_and_fillData()
{
    console.log("Get data")

    //Calling loadData() function to load data in HTML page
    loadData()
    
    //Filling all select objects, by getting all available dates in data in 'option' object
    datetime_list = tableData.map(function getDate(rec){
        return "<option>" + rec.datetime + "</option>"
    })
    //Ensuring only unique values are displayed
    document.getElementById("date_time").innerHTML = [...new Set(datetime_list)];

    //Filling all select objects, by getting all available cites in data in 'option' object
    city_list = tableData.map(function getDate(rec){
        return "<option>" + rec.city + "</option>"
    })
    //Ensuring only unique values are displayed. Cities are sorted so that user can easily find them
    document.getElementById("city").innerHTML = [...new Set(city_list.sort())];

     //Filling all select objects, by getting all available states in data in 'option' object
     state_list = tableData.map(function getDate(rec){
        return "<option>" + rec.state + "</option>"
    })
    //Ensuring only unique values are displayed. States are sorted so that user can easily find them
    document.getElementById("state").innerHTML = [...new Set(state_list.sort())];

     //Filling all select objects, by getting all available countries in data in 'option' object
     country_list = tableData.map(function getDate(rec){
        return "<option>" + rec.country + "</option>"
    })
    //Ensuring only unique values are displayed. Countries are sorted so that user can easily find them
    document.getElementById("country").innerHTML = [...new Set(country_list.sort())]; 
    
    //Filling all select objects, by getting all available shapes in data in 'option' object
    shape_list = tableData.map(function getDate(rec){
        return "<option>" + rec.shape + "</option>"
    })
    //Ensuring only unique values are displayed. Countries are sorted so that user can easily find them
    document.getElementById("shape").innerHTML = [...new Set(shape_list.sort())]; 
}



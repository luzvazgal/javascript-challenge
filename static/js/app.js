// from data.js
var tableData = data;

// YOUR CODE HERE!
//Initializing date filter to null
var dateFilter = null

var tbody = d3.select("tbody");


/**
 * Displays data from data.js. If dateFilter variable is null, it displays all data; othwerwise, 
 * it will display only content according to user's input (date)
 */
function loadData(){
    console.log("Table data "+tableData.length)
    //Variable to define if user's input (date) matches any of dates in data.js
    tableData.forEach( displayData )
  
}

/**
 * Function to display UFO's observations according to a dateFilter or all data
 * @param {*} record  Record containing all information related to a user's UFO observations
 */
function displayData(record){

    let row = tbody.append("tr");
    
    //Retrieving dictionary values (a record) using key names
    let datetime = record.datetime
    let city = record.city
    let state = record.state
    let country = record.country
    let shape = record.shape
   //Cleans comments by replacing &#44, &#39, &#33 characters by ','  ''', and '!' respectively
   //Although index.html is set as UTF-8 (unicode), it doesn't recognizes those charecters as they're coming from source (data.js)
   let comment = record.comments.replace(/&#33/g, "!").replace(/&#39/g, "'").replace(/&#44/g, ",");

   //Appending cells with values 
   row.append("td").text(record.datetime);
   row.append("td").text(record.city);
   row.append("td").text(record.state);
   row.append("td").text(record.country);
   row.append("td").text(record.shape);
   row.append("td").text(record.durationMinutes);
   row.append("td").text(comment);
}

/**
 * Filter data using date user's input. 
 * Removes all previous displayed data in webpage
 * Sets dateFilter variable to user's input to display only data according to user selection
 */
function filterByDate()
{
    //Setting date Filter to user's date input
    dateFilter = document.getElementById("datetime").value

    //Validate Date format
    if (validateDate()){
        //Clear previous displayed results in page
        tbody.selectAll("tr").remove()

        //Reinitializing tableData to filtered data according to user's filter
        tableData = tableData.filter(record=> record.datetime == dateFilter)

        //Validates whether user's datetime input has results or not
        if (tableData.length==0)
            alert("No records found for that date. Please type another date")
        //Otherwise, load results into HTML page
        else
            loadData()

        //Reassigning original data value to tableData to be filtered again
        tableData = data;
    }
    else{
        alert("Insert a valid date format mm/dd/yyyy")
    }
}

/**
 * Validates whether the date format is valid or not
 * return isValid True if user's date input has a valid format, either : mm/dd/yyyy or m/d/yyyy
 */
function validateDate()
{
    let isValid = true;
   

    //If date doesn't have either first or second '/', date format is not valid
    if (dateFilter.match(/\//g).length != 2 ){
        return false
    }

    let month =  dateFilter.substring(0, dateFilter.indexOf('/'))
    let day = dateFilter.substring(dateFilter.indexOf('/')+1, dateFilter.lastIndexOf('/'))
    let year = dateFilter.substring(dateFilter.lastIndexOf('/')+1)

    //Validates if month is a number between 1 and 12
    
    if(parseInt(month, 10)>=1 && parseInt(month, 10)<=12){
        month = parseInt(month, 10)
    }
    else
        return false

    //Validates if day is valid to month's input

    switch (month){
        //Feb
        case 2:
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=28){
                day = parseInt(day, 10)              
            }
            else
                return false
            break;

        //Apr, Jun, Sep, Nov
        case 4:
        case 6:
        case 9:
        case 11:
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=30){
                day = parseInt(day, 10)
            }
            else
                return false
            break;

        //Jan, Mar, May, Jul, Aug, Oct, Dec
        default:
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=31){
                day = parseInt(day, 10)
            }
            else
                return false
            break;
    }

    //Validates year is a valid four digit number
    
    if (year.length !=4 || isNaN(parseInt(year, 10)))
    {
       return false
    }
   
    dateFilter = month.toString()+"/"+day.toString()+"/"+year

    return isValid;
}



function fillSelectData()
{
    console.log("Get data")
    
    datetime_list = tableData.map(function getDate(dt){
        return "<option>" + dt.datetime + "</option>"
    })
    document.getElementById("date_time").innerHTML = [...new Set(datetime_list)];
}


// from data.js
var tableData = data;

// YOUR CODE HERE!
//Initializing filters to null
var dateFilter = null

var tbody = d3.select("tbody");

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
        var rows = tbody.selectAll("tr")
        rows.remove()

        //Loading data according to selected Date
        loadData()
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

    console.log("Validación 0 " + dateFilter.match(/\//g))

    //If date doesn't have either first or second '/', date format is not valid
    if (dateFilter.match(/\//g).length != 2 ){
        console.log("Validación 1 " + dateFilter.match(/\//g).length)
        return false
    }

    let month =  dateFilter.substring(0, dateFilter.indexOf('/'))
    let day = dateFilter.substring(dateFilter.indexOf('/')+1, dateFilter.lastIndexOf('/'))
    let year = dateFilter.substring(dateFilter.lastIndexOf('/')+1)

    //Validates if month is a number between 1 and 12
    console.log("Validación 2a " + dateFilter.substring(0,1))
    if(parseInt(month, 10)>=1 && parseInt(month, 10)<=12){
        month = parseInt(month, 10)
        console.log("Validación 2")
    }
    else
        return false

    //Validates if day is valid to month's input
    console.log("Validación 3a " + parseInt(day, 10) + " month: "+month)


    switch (month){
        //Feb
        case 2:
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=28){
                day = parseInt(day, 10)
                console.log("Validación 4")
            }
            else
                return false
            break;

        //Apr, Jun, Sep, Nov
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Entro switch")
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=30){
                day = parseInt(day, 10)
                console.log("Validación 5")
            }
            else
                return false
            break;

        //Jan, Mar, May, Jul, Aug, Oct, Dec
        default:
            console.log("Entro switch default")
            if(parseInt(day, 10)>=1 && parseInt(day, 10)<=31){
                day = parseInt(day, 10)
                console.log("Validación 3")
            }
            else
                return false
            break;
    }

    //Validates year is a valid four digit number
    console.log("Validación 4a " + parseInt(year, 10))
    if (year.length !=4 || isNaN(parseInt(year, 10)))
    {
        console.log("Validación 6")
       return false
    }
   
    dateFilter = month.toString()+"/"+day.toString()+"/"+year

    return isValid;
}

/**
 * Displays data from data.js. If dateFilter (dateF) param is null, it displays all data; othwerwise, it will display only content according to
user's input (date)
 */
function loadData(){

    //Variable to define if user's input (date) matches any of dates in data.js
    let isDateMatch = false;

    for(var i=0; i<tableData.length; i++){

        //Adding dictionary record to 'record' variable
        let record = tableData[i]
        
        //If there's no date filter
        if(dateFilter==null){
            displayData(record)
            //Not displaying alert if it's the initial load of data in webpage
            isDateMatch = true;
        }
        //If date is equal, display data
        else if (dateFilter==record["datetime"]){
            console.log("else if "+record["datetime"])
            displayData(record)
            isDateMatch = true;
            
        }
        
    }

    //If Date does not match with any of included in data.js
    if(!isDateMatch){
        alert("No records found for that date. Please type another date")
    }
}


/**
 * Function to display UFO's observations according to a dateFilter or all data
 * @param {*} record  Record containing all information related to a user's UFO observations
 */
function displayData(record){

    let row = tbody.append("tr");
    
    //Retrieving dictionary values (a record) using key names
        let datetime = record["datetime"]
        let city = record["city"]
        let state = record["state"]
        let country = record["country"]
        let shape = record["shape"]

        //Cleans comments by replacing &#44, &#39, &#33 characters by ','  ''', and '!' respectively
        //Although index.html is set as UTF-8 (unicode), it doesn't recognizes those charecters as they're coming from source (data.js)
        let comment = record["comments"].replace(/&#33/g, "!").replace(/&#39/g, "'").replace(/&#44/g, ",")

        //Appending cells with values 
        row.append("td").text(datetime)
        row.append("td").text(city)
        row.append("td").text(state)
        row.append("td").text(country)
        row.append("td").text(shape)
        row.append("td").text(record["durationMinutes"])
        row.append("td").text(comment)

       
    }



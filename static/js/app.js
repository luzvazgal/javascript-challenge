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

    //Clear previous displayed results in page
    var rows = tbody.selectAll("tr")
    rows.remove()

    //console.log("filter by date")
    //console.log(dateFilter)

    //Loading data according to selected Date
    loadData()
    
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



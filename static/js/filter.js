
/**
 * Loading all Data in index.html
 */
function load_and_fillData()
{

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
    list.splice(0,0,"<option>-----</option>")
    
    //Ensuring only unique values are displayed
    document.getElementById(idName).innerHTML = [...new Set(list.sort())];
}

/**
 * Displays data according to user's filter
 */
function filterData()
{
    console.log("Filter Data")
    //Getting values from all select lists
    let datetime = document.getElementById("date_time").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value
    let shape = document.getElementById("shape").value

    /*Results will hold data filtered using user's inputs (filter parameters). It's initialized with whole data set (data),
    * and each time a filter option is found it will narrow the data set
    */
    var results = data

    //Validates whether the drop down list (select) has a value distinct of '-----' which means the user has added a specific filter

    /*Datetime filter */
    if (datetime.match(/-----/g)==null){
        results = results.filter(function getData(rec){
            return rec.datetime == datetime 
        }
        )
        console.log("entro if datetime "+results.length)
    }

    /*City filter */
    if (city.match(/-----/g)==null){
        results = results.filter(function getData(rec){
            return rec.city == city
        }
        )
        console.log("entro if city")
    }

    /*State filter */
    if (state.match(/-----/g)==null){
        results = results.filter(function getData(rec){
            return rec.state == state
        }
        )

    }

    /*Country filter */
    if (country.match(/-----/g)==null){
        results = results.filter(function getData(rec){
            return rec.country == country
        }
        )
    }
    
    /*Shape filter */
    if (shape.match(/-----/g)==null){
        results = results.filter(function getData(rec){
            return rec.shape == shape
        }
        )
    }

    //If there are any results, they will be displayed in page; otherwise, an alert message will appear to user
    if(results.length>0){
        //Assigning results list to tableData to be displayed
        tableData = results;

        //Clear previous displayed results in page
        tbody.selectAll("tr").remove()
        
        //Loads data according to results
        loadData();
    }
    else{
        alert("No records found matching your search criteria. Please choose another one")
    }
    
    

}
    

    

    





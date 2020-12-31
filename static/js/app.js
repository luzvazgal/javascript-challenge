// from data.js
var tableData = data;

// YOUR CODE HERE!
//Initializing filters to null
var dateFilter = null

function displayData(){
    var tbody = d3.select("tbody");

    for(var i=0; i<tableData.length; i++){
        //console.log(tableData[i])
        let row = tbody.append("tr");
        let record = tableData[i]
    
        
        let datetime = record["datetime"]
        let city = record["city"]
        let state = record["state"]
        let country = record["country"]
        let shape = record["shape"]

        //Cleans comments by replacing &#44, &#39, &#33 characters by ','  ''', and '!' respectively
        //Although index.html is set as UTF-8 (unicode), it doesn't recognizes those charecters as they're coming from source (data.js)
        let comment = record["comments"].replace(/&#33/g, "!").replace(/&#39/g, "'").replace(/&#44/g, ",")


        row.append("td").text(datetime)
        row.append("td").text(city)
        row.append("td").text(state)
        row.append("td").text(country)
        row.append("td").text(shape)
        row.append("td").text(record["durationMinutes"])
        row.append("td").text(comment)
    }
}

function filterByDate()
{
    dateFilter = document.getElementById("datetime")
    
}

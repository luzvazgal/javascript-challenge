// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

for(var i=0; i<tableData.length; i++){
    //console.log(tableData[i])
    let row = tbody.append("tr");
    let record = tableData[i]
    row.append("td").text(record["datetime"])
    row.append("td").text(record["city"])
    row.append("td").text(record["state"])
    row.append("td").text(record["country"])
    row.append("td").text(record["shape"])
    row.append("td").text(record["durationMinutes"])
    row.append("td").text(record["comments"])
}
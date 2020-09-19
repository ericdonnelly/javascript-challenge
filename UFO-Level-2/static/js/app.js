// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Input data to HTML
data.forEach(function(i) {
  console.log(i);
  var row = tbody.append("tr");

  Object.entries(i).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
  });
});

// Select button
var button = d3.select("#filter-btn");
button.on("click", pressFilter);

function pressFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Table body
    tbody.html("");

    // Get the value property of the input elements and set all text to lowercase
    var selectDate = d3.select("#datetime").property("value");

    var selectCountry = d3.select("#country").property("value").toLowerCase();

    var selectState = d3.select("#state").property("value").toLowerCase();

    var selectCity = d3.select("#city").property("value").toLowerCase();

    var selectShape = d3.select("#shape").property("value").toLowerCase();

    // initialize tableData as filteredData
    filteredData = tableData;

    if (selectDate) {
    filteredData = filteredData.filter(r => r.datetime === selectDate);
    }
    if (selectCountry) {
    filteredData = filteredData.filter(r => r.country === selectCountry);
    }
    if (selectState) {
    filteredData = filteredData.filter(r => r.state === selectState);
    }
    if (selectCity) {
    filteredData = filteredData.filter(r => r.city === selectCity);
    }
    if (selectShape) {
    filteredData = filteredData.filter(r => r.shape === selectShape);
    }
  
    console.log(filteredData);

    // Input filtered data to HTML
    filteredData.forEach(function(m) {
        console.log(m);
        var row = tbody.append("tr");
      
        Object.entries(m).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
      });


  };

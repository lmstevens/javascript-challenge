// from data.js
var tableData = data;

// YOUR CODE HERE!

// // Get a reference to the table body
// var tbody = d3.select("tbody");

// // Console.log the weather data from data.js
// console.log(data);

// // // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach((ufoSighting) => {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");

//     Object.entries(ufoSighting).forEach(([key, value]) => {
//         console.log(key, value);

//         //    Append a cell to the row for each value
//         // in the weather report object
//         var cell = row.append("td");
//         cell.text(value);

//     });
// });

// Select the button
var button = d3.select("#filter-btn");
console.log(button);

// Select the form
var form = d3.select(".form-group");
console.log(form)

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody"); 

    filteredData.forEach((ufoSighting) => {
        console.log(ufoSighting);
        var row = tbody.append("tr");
    
        Object.entries(ufoSighting).forEach(([key, value]) => {
            
            console.log(key, value);
    
            //    Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value);
    
        });
    });

//     // BONUS: Calculate summary statistics for the age field of the filtered data

//     // First, create an array with just the age values
//     var ages = filteredData.map(person => person.age);

//     // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//     var mean = math.mean(ages);
//     var median = math.median(ages);
//     var mode = math.mode(ages);
//     var variance = math.var(ages);
//     var standardDeviation = math.std(ages);

//     // Then, select the unordered list element by class name
//     var list = d3.select(".summary");

//     // remove any children from the list to
//     list.html("");

//     // append stats to the list
//     list.append("li").text(`Mean: ${mean}`);
//     list.append("li").text(`Median: ${median}`);
//     list.append("li").text(`Mode: ${mode}`);
//     list.append("li").text(`Variance: ${variance}`);
//     list.append("li").text(`Standard Deviation: ${standardDeviation}`);
};
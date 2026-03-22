// D3.js - Appliance Energy Calculator
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("calculate-btn");
    const resultsDiv = document.getElementById("results");

    button.addEventListener("click", function() {
        // Get input values
        let wattage = parseFloat(document.getElementById("wattage").value);
        let hours = parseFloat(document.getElementById("hours").value);
        let price = parseFloat(document.getElementById("price").value);

        resultsDiv.innerHTML = "";

        // Error handling
        if (isNaN(wattage) || wattage <= 0) {
            resultsDiv.innerHTML = "<p>Please enter a valid appliance wattage.</p>";
            return;
        }
        if (isNaN(hours) || hours < 0) {
            resultsDiv.innerHTML = "<p>Please enter a valid number of hours per day.</p>";
            return;
        }
        if (isNaN(price) || price < 0) {
            resultsDiv.innerHTML = "<p>Please enter a valid electricity price.</p>";
            return;
        }

        // Calculations
        let dailyKWh = (wattage * hours) / 1000;
        let monthlyKWh = dailyKWh * 30;
        let yearlyKWh = dailyKWh * 365;
        let monthlyCost = monthlyKWh * (price / 100);
        let yearlyCost = yearlyKWh * (price / 100);

        // Display results
        resultsDiv.innerHTML = `
            <h3>Results:</h3>
            <p>Daily Energy Consumption: ${dailyKWh.toFixed(2)} kWh</p>
            <p>Monthly Energy Consumption: ${monthlyKWh.toFixed(2)} kWh</p>
            <p>Yearly Energy Consumption: ${yearlyKWh.toFixed(2)} kWh</p>
            <p>Estimated Monthly Cost: $${monthlyCost.toFixed(2)}</p>
            <p>Estimated Yearly Cost: $${yearlyCost.toFixed(2)}</p>
        `;
    });
});
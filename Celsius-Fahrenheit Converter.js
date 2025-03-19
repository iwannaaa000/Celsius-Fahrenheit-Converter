

function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let temperatureResult = document.getElementById("temperatureResult");

    if (unit === "celsius") {
        let celsius = parseFloat(temperature);
        let fahrenheit = (celsius * 9/5 ) + 32;
        temperatureResult.textContent = `Result: ${fahrenheit.toFixed(2)} °F`;
    } else {
        let fahrenheit = parseFloat(temperature);
        let celsius = (fahrenheit - 32) * 5/9;
        temperatureResult.textContent = `Result: ${celsius.toFixed(2)} °C`;
    }
}
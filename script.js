function celsiusFahrenheit(celsius) {
    return (celsius * 9/5 ) + 32;
}

function celsiusKelvin(celsius) {
    return celsius + 273.15;
}

function conversor() {
    let tempCelsius = parseFloat(document.getElementById("celsiusInput").value);

    if (!isNaN(tempCelsius)) {
        let tempFahrenheit = celsiusFahrenheit(tempCelsius).toFixed(2);
        let tempKelvin = celsiusKelvin(tempCelsius).toFixed(2);

        let resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "<p>" + tempCelsius + " grados Celsius son " + tempFahrenheit + " grados Fahrenheit.</p>";
        resultadosDiv.innerHTML += "<p>" + tempCelsius + " grados Celsius son " + tempKelvin + " Kelvin.</p>";

    } else {
        alert("Por favor, ingrese una temperatura válida.");
    }
}
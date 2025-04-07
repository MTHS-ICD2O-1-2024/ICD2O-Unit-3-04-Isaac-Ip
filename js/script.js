// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html


/**
* Do basic math.
*/
function doMathClicked() {
    // input
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)


    // process
    const celsius = (fahrenheit - 32) * 5 / 9


    // output
    document.getElementById("celsius").innerHTML =
        "<p>The celsius is: " + celsius.toFixed(2) + "°C. </p>"
}

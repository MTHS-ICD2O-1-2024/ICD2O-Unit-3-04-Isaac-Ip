// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-3-04-Isaac-Ip/sw.js", {
    scope: "/ICD2O-Unit-3-04-Isaac-Ip/",
  })
}

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
        "<p>If the fahrenheit is " + fahrenheit + "°F, then the celsius is " + celsius.toFixed(2) + "°C. </p>"
}

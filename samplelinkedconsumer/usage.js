"use strict";
exports.__esModule = true;
// Make sure to run "npm run build" outside the sampleconsumer folder and then go back
// into the sampleconsumer folder and run "npm link ../" to link this folder with the local package
// Run "tsc usage.ts" and then "node usage.js" to see how it behaves
var numberwithcommas_1 = require("numberwithcommas");
console.log("500 Number turns into ", numberwithcommas_1.numberWithCommas(500));
console.log("500 String turns into ", numberwithcommas_1.numberWithCommas("500"));
console.log("4500 Number turns into ", numberwithcommas_1.numberWithCommas(4500));
console.log("4500 String turns into ", numberwithcommas_1.numberWithCommas("4500"));
console.log("1 Million Number turns into ", numberwithcommas_1.numberWithCommas(1000000));
console.log("1 Million String turns into ", numberwithcommas_1.numberWithCommas("1000000"));

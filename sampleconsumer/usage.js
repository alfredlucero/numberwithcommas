"use strict";
exports.__esModule = true;
// Make sure to install the proper version of "numwithcommas" that you want to test
// "npm install numwithcommas@X.X.X"
// Run "tsc usage.ts" and then "node usage.js" to see how it behaves
var numwithcommas_1 = require("numwithcommas");
console.log("500 Number turns into ", numwithcommas_1.numWithCommas(500));
console.log("500 String turns into ", numwithcommas_1.numWithCommas("500"));
console.log("4500 Number turns into ", numwithcommas_1.numWithCommas(4500));
console.log("4500 String turns into ", numwithcommas_1.numWithCommas("4500"));
console.log("1 Million Number turns into ", numwithcommas_1.numWithCommas(1000000));
console.log("1 Million String turns into ", numwithcommas_1.numWithCommas("1000000"));

"use strict";

console.log("Hello, from the Javascript console!");

// alert("You just won!");
// alert("Just kidding.");
//
// var iPodWinner = "You just won a iPod!";
// alert(iPodWinner);

// the following line will show the OK/CANCEL confirm dialog
// var confirmed = confirm('Are you sure you want to do XYZ?');
// console.log(confirmed); // will be either true or false

// var userInput = prompt('Please type something:');
// console.log('The user entered: ' + userInp

/*********************************************************************
 * Functions
 */

// function sayHello(name = "Chris") {       // Has default parameter set to Chris if no name is given in alert
//     return alert('hello there,' + name);
// }

// var globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var localVar = "Look, I'm Local!"; // declare a local variable
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
// }
//
// scopeExample();
// alert(localVar); // localVar is NOT accessible here and this will produce an error

////////////// IIFE // Protects Code
// (function () {
//     "use strict";
//
//     // Javascript lives here!
// })();

// (function () {
//     "use strict"; // protects code
//     var globalVar = "Now locked behind an IIFE!";
//         console.log("Console Log: " + globalVar);
//     })();


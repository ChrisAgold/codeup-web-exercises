"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var input = "blue";
function analyzeColor(input) {
   // var input = "blue";
    if (input == "blue") {
        console.log("blue is the color of the sky");
    } else if (input == "red") {
        console.log("Strawberries are red");
    } else if (input == "cyan") {
        console.log("I don't know anything about cyan");
    } else {
        console.log("I don't know that color.")
    }
}
console.log(analyzeColor('blue'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch(randomColor) {
    case "red":
        console.log("Lady Bugs are red.");
        break;
    case "orange":
        console.log("Garfield is orange.");
        break;
    case "yellow":
        console.log("Lions are sorta yellow.");
        break;
    case "green":
        console.log("Frogs are green.");
        break;
    case "blue":
        console.log("The ocean is blue.");
        break;
    case "indigo":
        console.log("Indigo is an uncommon color.");
        break;
    case "violet":
        console.log("Not many animals are violet.");
        break;
    default:
        console.log(randomColor + " not a color I know.");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = window.prompt("Pick a color.");
analyzeColor(color);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 *
 */
var num = [0, 1, 2, 3, 4, 5];
var randomNum = num[Math.floor(Math.random() * num.length)];

switch(randomNum) {
    case 0:
        console.log("You get no discount.");
        break;
    case 1:
        console.log("Discount 10%.");
        break;
    case 2:
        console.log("Discount 25%.");
        break;
    case 3:
        console.log("Discount 35%.");
        break;
    case 4:
        console.log("Discount 50%.");
        break;
    case 5:
        console.log("You get it all for free!");
        break;
}




/*Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var total = 100;
function calculateTotal(num, total) {
            if (num === 0) {
                return total;
            } else if (num === 1) {
                return total * 0.10;
            } else if (num === 2){
                return total * 0.25;
            } else if (num === 3) {
                return total * 0.35;
            } else if (num === 4) {
                return total * 0.50;
            } else {
                return "You get it for free!";
            }
        }
        console.log(calculateTotal(total));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

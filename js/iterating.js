(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Chris', 'Sam', 'Vitold', 'Jason'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name, i) {
    console.log(i + ":" + name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
var teas = ['green', 'black', 'white', 'yellow', 'red'];
var shoes = ['nike', 'reebok', 'adidas', 'freebirds', 'vans'];
function first(arr) {
    return arr[0];
}
// Alternative way to re-write function; anonymous function
// var first = function(arr) {
//     return arr[0];
// }

function second(arr) {
    return arr[1];
}
function third(arr) {
    return arr[2];
}

console.log(first(teas));
console.log(first(shoes));
console.log(second(teas));
console.log(second(shoes));
console.log(third(teas));
console.log(third(shoes));

// Return last array item in teas & shoes array
function last(arr) {
    return arr[arr.length - 1];
}
console.log(last(teas));
console.log(last(shoes));
})();


// Time Example Function
function countTimer(num) {
    var start = Date.now();
    console.log("Counting from 1 to " + num);
    for (var i = 1; i < num; i++) {
        // just counting
    }
    var end = Date.now();
    console.log("Done!");
    console.log("It took " + (end - start) + " milliseconds");
}
// console.log(countTimer(10000000));







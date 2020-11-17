(function(){
    "use strict";
// Notes at bottom of page //
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
planets.unshift("The Sun");
console.log(planets);
    console.log('Adding "Pluto" to the end of the planets array.');
planets.push("Pluto");
console.log(planets);
    console.log('Removing "The Sun" from the beginning of the planets array.');
planets.shift();
console.log(planets);
    console.log('Removing "Pluto" from the end of the planets array.');
planets.pop();
console.log(planets);
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var indexOfEarth = planets.indexOf("Earth");
planets.indexOf('Earth');
console.log(indexOfEarth);
    console.log("Reversing the order of the planets array.");
planets.reverse();
console.log(planets);
    console.log("Sorting the planets array.");
planets.sort();
console.log(planets);

})();
// ******************************************************************************************************** //
// Array Notes //
// .push adds to end or array
// .unshift adds to beginning of array
// .pop() removes last item from array, can call it back
// .shift removes first item from array

// Locating elements in array //
// .lastIndexOf returns last index of the last instance of the element
// .indexOf find index of element in array ex: planets.indexOf("Earth");

// Slicing //
// .slice allows us to copy a portion of an array; does not modify the original array; takes two arguments
// instruments.slice(5); returns the first 5 elements of the array
// instruments.slice(5, 7); will return elements between indexes 5 & 7

// .reverse reverses the order of an array

// Sorting //
// instruments.sort(); will sort alphabetically based on first letter
// can call new variable; var instruments2 = instruments; then sort instruments2.sort();
// Upper case comes first in sorted arrays ********************* can use .toLowerCase or .toUpperCase to help sort

// Join //
// instruments.join(".") will join all strings in array with a .

// Split //
// "guitar".split(""); ===> "g", "u", "i", "t", "a", "r"

// .push
// .pop
// .shift
// .unshift
// .indexOf
// .sort
// .split
// .join
// .lastIndexOf
// .reverse

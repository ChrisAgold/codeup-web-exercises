(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
// var planetsArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
planetsArray = planetsString.split("|") // convert string to array
console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

var planetsString2 = planetsArray.join(" <br> ");
document.write(planetsString2);
// You have to put <br> in “”
var planetsString3 = planetsArray.join(" </li><br><li></li> ");
document.write(planetsString3);
})();

// "<ul>" + "<li>" + planetsArray.join("</li><li>") + "</li>" + "</ul>"

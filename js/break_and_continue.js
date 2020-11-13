// Break & Continue Exercises
// Exercise 1
do {
    var odd = Number(prompt("Pick an odd number between 1 & 50!"));
    if (odd % 2 === 0) {
        alert(odd + " is not odd, please try again.")
    } else if (odd > 50){
        alert(odd + " is greater than 50!");
    } else if (odd < 1) {
        alert(odd + " is less than 1!");
    }else{
        alert("That number works!");
        break;
    }
} while(true)
// Exercise Solution
while(isNaN(userNum) || (userNum % 2 === 0) || (userNum < 1) || (userNum > 50)) {
    var userNum = prompt("Please enter a odd valid number between 1 and 50.")
}

console.log("Number to skip is: " + userNum);

for(var i = 1; i < 50; i++) {
    if(i === userNum) {
        console.log("Yikes Skipping Number: " + i);
    } else if (i % 2 === 0) {
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}





// Exercise 2
// do {
//     var odd = Number(prompt("Pick an odd number between 1 & 50!"));
//     if (odd % 2 === 0) {
//         console.log("Number to skip is: " + odd);
//         continue;
//     } else if (){
//         alert(odd + " is greater than 50!");
//     } else if (odd < 1) {
//         alert(odd + " is less than 1!");
//     }else if{
//         alert("That number works!");
//         continue;
//     }
// } while(true)
//  var oddNumber = prompt("Please enter an odd number between 1 and 50.");
//
// function odd(oddNumber) {
//     while (oddNumber % 2 === 0 || oddNumber > 49 || oddNumber < 1) {
//         oddNumber = prompt("The number must be an odd number between 1 and 50. Please enter a valid number.")
//         console.log(oddNumber);
//     }
//     console.log("Number to skip: " + oddNumber)
//
//
//     for (var i = 1; i < 49; i += 2) {
//         console.log(i);
//         if(i === oddNumber) {
//         console.log("Yikes! Skipping number: " + i)
//         } else if (i % 2 === 0) {
//             continue;
//         }
//     }
// }
// Exercise 3
var oddNumber = prompt("Please enter an odd number between 1 and 50.");
while (oddNumber % 2 === 0 || oddNumber > 49 || oddNumber < 1) {
        oddNumber = prompt("The number must be an odd number between 1 and 50. Please enter a valid number.")
        console.log(oddNumber);
    }
    console.log("Number to skip: " + oddNumber)
for (var i = 1; i < 50; i+=2) {

    if (i == oddNumber) {
        console.log("Yikes! Skipping: " + oddNumber)
    } else {

        console.log("Here is a odd number. " + i);
    }
}



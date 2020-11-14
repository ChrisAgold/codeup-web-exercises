'use strict'
// var items = [1,3,4,5,6,7,8,9,10];
// var loop = 7;
// for (var i = 0; i < items.length; i++) {
//     loop *= items[i];
// }

//Multiplication tables Exercise 2
// var showMultiplicationTable = 7;
// for (var i = 0; i <= 10; i++) {
//     var result = showMultiplicationTable * i;
//     console.log(showMultiplicationTable + ' * ' + i + ' = ' + result);
// }

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
// Exercise 2 solution
// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " x" + i + " = " + (num * i));
//     }
// }

// Exercise 1
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// Solution Exercise 2
// var num = 7;
//
// for (var i = 1; i <= 10; i++) {
//     var result = num * i;
//     console.log(result);
// }

// Exercise 3
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// Exercise 3
// function showMultiplicationTable() {
//     // showMultiplicationTable = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//
//     for (var i = 1; i <= 10; i++) {
//         var randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20);  // Math.floor(Math.random() * (upperRange - lowerRange + 1) + lowerRange);
//         if (randomNum % 2 == 0) {
//             console.log(randomNum + " Is Even")
//         } else {
//             console.log(randomNum + " Is Odd")
//         }
//
//     }
// }
// showMultiplicationTable();

// Exercise 3 Solution
for(var i = 0; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * (200 - 20) + 20)
    if(randomNum % 2 === 0) {
        console.log(randomNum + " is Even");
    } else {
        console.log(randomNum + " is Odd");
    }
}

    //
    // var max = (200/20) + 1;
    // var result = 20 * (Math.floor(Math.random())*max)
    // for (var i = 1; i <= 200; i++) {
    //     if (result % 2 == 0) {
    //         console.log("Is Even")
    //     } else {
    //         console.log("Is Odd")
    //     }
    //     console.log(result + ' * ' + i + ' = ' + result);
    // }
    //

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// var showMultiplicationTable = 1;
// for (var i = 0; i <= 10; i++) {
//      var result = showMultiplicationTable + i;
//      console.log(result);
//  }

// var num = "";
// var size = prompt("Enter the size of the pyramid");
// for(var i=1; i<=size; i++)
// {
//     num = num + i
//     console.log(num);
// }
//function forLoop() {

// Exercise 4
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= i; j++) {
//             document.write(i);
//         }
//
//             document.write(" <br/>");
//     }
//
// function incrementingStairs() {
//         for (var i = 1; i < 10; i++) {
//             console.log(i.toString().repeat(i));
//         }
// }
// incrementingStairs(4);

// Exercise 4 Solution
for (var outer = 1; outer <= 9; outer++) {
    var output = '';

    for (var inner = 1; inner <= outer; inner++) {
        //console.log("At this point our output bucket has: " + output + " and our counter is " + outer);
        output = output + outer;
    }
    console.log(output);
}

// Exercise 5
for (var i = 100; i >= 5; i -= 5) { // i = i - 5
    console.log(i);
}

// Do While Loops Examples
// var i = 0;
//     while (i < 10) {
//         console.log('while loop iteration #' + i);
//         i++;
//         if (i === 7) {
//             break;
//         }
//     }
//         console.log('Happy FRIDAY');
//
//     // Nested For Loop in Function
// function countNumber() {
//     while (i <= 20) {
//         console.log("While loop iteration#" + i);
//         i++;
//         if(i == 17) {
//             break;
//         }
//     }
// }
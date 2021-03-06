(function () {
    "use strict";
// NOTE: "this." references object

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        // var name : value ,
        firstName: "Vitold",
        lastName: "Buzinski"
    }
    console.log(person.firstName) // "Sam"
    console.log(person.lastName) // "Lazo"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello, " + "" + this.firstName + " " + this.lastName;
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            console.log("Howdy there, " + shopper.name + "! Your total before any discount is " + shopper.amount.toFixed(2) + ". since that's over $200, you will get a 12% discount, meaning your final total is $" + (shopper.amount * .88).toFixed(2) + " , ");
        } else {
            console.log("Howdy there " + shopper.name + "! Your total before discount is $" + shopper.amount.toFixed(2) + " , As this is less than $200, you will not get a discount. Your total today is $" + shopper.amount.toFixed(2) + " .");
        }
    });

// var discount = function (shoppers){
//     if (shoppers.amount < 200) {
//             console.log('Shopper ' + shoppers.name + ', total bill before discount, ' + shoppers.amount + ' discount $0, ' + ' amount after discount ' + shoppers.amount);
//     } else {
//             console.log('Shopper ' + shoppers.name + ', total bill before discount, ' + shoppers.amount + ' discount, ' + shoppers.amount * .12 + ' amount after discount ' + (shoppers.amount - shoppers.amount * .12));
//     }
// }
// shoppers.forEach(discount);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        // Function Example of above problem

    var books = [
            {
                title: 'Harry Potter', author: {
                    firstName: 'JK', lastName: 'Rowling',
                }
            },
            {
                title: 'Dune', author: {
                    firstName: 'Frank', lastName: 'Herbert',
                }
            },
            {
                title: 'Star Wars', author: {
                    firstName: 'George', lastName: 'Lucas',
                }
            },
            {
                title: 'The Hot Zone', author: {
                    firstName: 'Richard', lastName: 'Preston',
                }
            },
            {
                title: 'Lord Of The Rings', author: {
                    firstName: 'J.R.R.', lastName: 'Tolkien',
                }
            }
        ]
    ;
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    for (var x = 0; x < 5; x++) {
        console.log("Book # " + (x + 1));
        console.log("Author " + books[x].author.firstName);
    }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// Bonus
    function showBookInfo(book) {
        var str = "Title: " + book.title + "\n";
        str = str + "Author: " + book.author.firstName + " " + book.author.lastName;
        return str;
    }

    books.forEach(function (book, index) {
        console.log("Book #" + index + 1 + "\n" + showBookInfo(book));
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function addBook(title, first, last, booksArr) {
        var obj = {
            title: title,
            author: {
                firstName: first,
                lastName: last
            }
        };
        booksArr.push(obj);
        return booksArr;
    }

    addBook("The Art of War", "Sun", "Tsu", books);
    books.forEach(function (book) {
        console.log(book);
    });
})();

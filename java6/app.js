// Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime() {
    const currentDateTime = new Date();
    alert(`Current Date and Time: ${currentDateTime}`);
}

// Call the function to display the current date and time
displayCurrentDateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "! Welcome.");
}

// Example usage:
const userFirstName = prompt("Enter your first name:");
const userLastName = prompt("Enter your last name:");

greetUser(userFirstName, userLastName);

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        return sum;
    } else {
        return "Invalid input. Please enter valid numbers.";
    }
}

const result = addTwoNumbers();
console.log("The sum of the two numbers is:", result);


// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use +, -, *, or /.";
    }
}

// Example usage:
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");
const operator = prompt("Enter the operator (+, -, *, /):");

const result = calculator(num1, num2, operator);

if (typeof result === "number") {
    alert(`Result: ${result}`);
} else {
    alert(result);
}


// 5. Write a function that squares its argument.

function squareNumber(number) {
    return number * number;
}

// Example usage:
const num = 5;
const squared = squareNumber(num);
console.log(`The square of ${num} is: ${squared}`);

// Write a function that computes factorial of a number.

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        return number * factorial(number - 1);
    }
}

// Example usage:
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`);


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function countNumbers(start, end) {
    if (start > end) {
        alert("Start number should be less than or equal to the end number.");
        return;
    }

    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

// Example usage:
const startNumber = parseInt(prompt("Enter the start number:"));
const endNumber = parseInt(prompt("Enter the end number:"));

countNumbers(startNumber, endNumber);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function | JAVASCRIPT

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }

    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

// Example usage:
const baseLength = parseFloat(prompt("Enter the length of the base:"));
const perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));

const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
console.log(`The hypotenuse of the right-angle triangle is: ${hypotenuse}`);

// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

function calculateRectangleArea(width, height) {
    const area = width * height;
    return area;
}

// Example usage by passing variables
const rectangleWidth = 5;
const rectangleHeight = 10;
const area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
console.log("Area with variables:", area2);

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original cleaned string is the same as the reversed one
    return cleanedStr === reversedStr;
}

// Example usage:
const inputString = prompt("Enter a string to check for palindrome:");
const result = isPalindrome(inputString);

if (result) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}


// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetterOfEachWord(inputString) {
    const words = inputString.split(" "); // Split the input string into words
    const capitalizedWords = [];

    for (const word of words) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" "); // Join the capitalized words back into a string
}

// Example usage:
const inputString = "the quick brown fox";
const result = capitalizeFirstLetterOfEachWord(inputString);
console.log("Transformed String:", result);


// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(inputString) {
    const words = inputString.split(" "); // Split the input string into words
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage:
const inputString = "Web Development Tutorial";
const result = findLongestWord(inputString);
console.log("Longest Word:", result);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// function | JAVASCRIPT

// Page 3 of 4

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(inputString, letter) {
    let count = 0;

    for (const char of inputString) {
        if (char === letter) {
            count++;
        }
    }

    return count;
}

// Example usage:
const inputString = 'JSResourceS.com';
const letterToCount = 'o';
const result = countLetterOccurrences(inputString, letterToCount);
console.log(`Number of occurrences of '${letterToCount}' in the string: ${result}`);


// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
}

// Function to calculate the area of a circle
function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area}`);
}

// Example usage:
const radius = 5; // You can change the radius value as needed
calcCircumference(radius);
calcArea(radius);


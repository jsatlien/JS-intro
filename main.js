/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: It has no value because no value has been defined yet.


givenName = "Brit";
// Q: What is `givenName` set to right now?
// A: the string "Brit".


givenName = givenName;
// Q: What is `givenName` set to right now?
// A: It is still going to return the value "Brit", because givenName is not a string unless it is closed within quotes or double quotes.

var greeting = "Hello, how are you? " + givenName;
// Q: What is `greeting` set to?
// A: "Hello, how are you? Brit" because it will combine the two given strings.


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: the value of the 'high' var minus the value of the 'low' var, or 40.

math = high - "5";
// Q: What is `math` set to?
// A: the var 'high' minus the string value "5", which gets converted by JS into the numerical value '5'.
// The end result of the equation should be 45.


/* =========================================================
     Part 3: Expressions - You Write Code!
*/

// Create a variable to calculate Brit's age
// The answer should read "Brit is 33 years old"
// The answer should not be written in a comment.

var born = 1983;
var today = 2016;

// Answers Below:

var oldMan = today - born;

// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:

var yourName = "Jack"
var instructorName = "Brit"


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard. Their instructor's name is " + instructorName;

statement
"Jack is taking a class at the Iron Yard. Their instructor's name is Brit"

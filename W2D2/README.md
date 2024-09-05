# Week 2 Day 2 - msc JavaScript
## Switch Statements
The `switch` statement in JavaScript is a control flow statement 
Used to perform different actions based on different conditions. 
It's an alternative to using multiple `if...else if...else` statements when you want to compare **the same expression against multiple values**.
```js
switch (expression) {
  case value1:
    // Code to execute when the expression matches value1
    break;
  case value2:
    // Code to execute when the expression matches value2
    break;
  // ... more cases ...
  default:
    // Code to execute if none of the cases match
    break;
}
```
- Use a `switch` statement when you need to compare a single value or expression against a series of values. It's especially useful when dealing with multiple potential values for a variable or expression and makes the code more readable and organized compared to multiple `if...else if` statements.

- `switch` statements work best with discrete values, such as numbers, strings, or boolean values. **If your comparisons are complex or involve ranges or conditions, an `if...else` chain might be more suitable.**
### Structure/Syntax
- **`switch (expression)`**: This is the value that you want to evaluate. The `switch` statement compares the value of the expression to each `case` value.

- **`case value:`**: Each `case` represents a potential match for the expression. If the expression matches a `case` value, the corresponding block of code is executed.

- **`break`**: This keyword is used to exit the `switch` statement once a matching `case` is found and its code block is executed. Without the `break` statement, the code will continue executing the next cases ("fall-through") even if a match is found.

- **`default:`**: This is an optional case that executes if none of the specified cases match the expression. Think of it as the equivalent of an `else` statement.
```js
// let fruit = "strawberry";
// let fruit = "apple";
let fruit = "banana";
// let fruit = "plum";
switch (fruit) {
	case "apple":
		console.log("Yes Please");
		break;
	case "strawberry":
		console.log("More!");
		break;
	case "banana":
		console.log("Ewwwww");
		break;
	default:
		console.log("i dont like that becasue i havent tried it");
}
```
**Fall-Through Behavior**: If you omit the `break` statement, the next case will execute regardless of whether its condition matches. This can be useful if multiple cases should execute the same code.
```js
switch (fruit) {
	case "apple":
	case "grape":
	case "strawberry":
		console.log("More!");
		break;
	case "banana":
		console.log("Ewwwww")
		break;
	default:
		console.log("i dont like that becasue i havent tried it");
		break;
}

```
### With boolean and simple range
```js
function applyDiscount(input){
    switch (true) {
        case input < 30:
            console.log("Under 30, student?");
            break;
        case input < 65:
            console.log("Between 30 and 64, NOPE.");
            break;
        default:
            console.log("65 or older, Senior.");
            break;
    }
}
```
---
## [Try Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
`try...catch` is a statement used to handle errors gracefully. It allows you to run code that might throw an error and deal with that error if it occurs, without crashing your entire program.

**Use Case**:
- code that may not crash the program however most likely an unusable value
- When an error is thrown program runs without crashing
### Syntax
The **`try...catch`** statement is comprised of a 
- `try` block 
- and either 
	- a `catch` block, 
	- a `finally` block, 
	- or both. 

The code in the `try` block is executed first
If it throws an exception, the code in the `catch` block will be executed. 
The code in the `finally` block will always be executed before control flow exits the entire construct.
```js
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```
An optional [identifier or pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#catch_binding) to hold the caught exception for the associated `catch` block. If the `catch` block does not use the exception's value, you can omit the `exceptionVar` and its surrounding parentheses.
### Examples
```js
try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log("Result: " + result);
    
	// This will cause an error
    let undefinedVariable = undefinedVariable.someProperty; 
    console.log("This will not be logged");

} catch (error) {
    // Handle the error
    console.log("An error occurred: " + error.message);
} finally {
    // Code that runs no matter what
    console.log("This runs regardless of error.");
}
```


---
## [Positional/Default Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
Parameters default to undefined in js
```js
function greet(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
}
greet(); //ouput => Hello, undefined undefined!
```
### Positional Arguments
**Positional arguments** are the basic type of arguments passed to a function. 
These arguments are matched with parameters based on their position in the function call. 
The first argument passed corresponds to the first parameter, the second argument to the second parameter, and so on.
```js
greet("firstName", "lastName");  //output => Hello, firstName lastName!
greet("lastName", "firstName");  //output => Hello, lastName firstName!
```
### Default Arguments
**Default arguments** are parameters that have default values if no value (or `undefined`) is passed when the function is called.
- If `firstName` or `lastName` is not provided, they default to "Guest" and "User", respectively.
- If only one argument is provided, the other parameter still uses its default value.
```js
function greetGuest(firstName = "Guest", lastName = "User") {
    console.log(`Hello, ${firstName} ${lastName}!`);
}
greetGuest(); //output => Hello, Guest User!
greetGuest("John"); //output => Hello, John User!
greetGuest("John", "Doe"); //output => Hello, John Doe!
greetGuest(undefined , "Doe"); //ouput => Hello, Guest Doe!
```
When a parameter is explicitly set to`undefined`, JavaScript uses the default value for that parameter.

---

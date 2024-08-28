# W1D2

# JS Basics - Pt 2
## [Functions](https://login.codingdojo.com/m/612/15814/115705)

A **function** is a **named block of code that executes a specific task**. It allows you to create a list of instructions that can be run at any time and as many times as needed.
### Key Characteristics of Functions:
- **Name**: Identifies the function.
- **Parameters**: Values passed into the function (parentheses are required, but parameters are optional).
- **Body**: A series of instructions that the function performs.
- **Return Statement**: Specifies the value the function returns after execution (if there is no explicit return statement, it returns `None`).
### Benefits of Using Functions:
- **Reduces Code Duplication**: Avoids repeating the same code multiple times.
- **Simplifies Complex Problems**: Breaks down larger problems into smaller, more manageable pieces.
- **Improves Code Clarity**: Makes the code easier to understand and maintain.
### Structure/Syntax of a Function:
1. **Function Keyword**: Defines the function.
2. **Name**: Specifies what the function is called(like a variable name).
3. **Parentheses**: Enclose any parameters.
4. **Parameters**: Input values for the function (optional).
5. **Curly Braces or Indentation**: Encloses the body of the function.
6. **Body**: Contains the instructions the function will execute.
7. **Return Statement**: Specifies what the function returns (Optional).
8. **Function Call**: Executes the function. 
### ES5 Example
```javascript
function sayNameES5(username) {
  return 'My name is ' + username;
}

console.log(sayNameES5('BenJammin'));
```
### ES6 Example
```javascript
const sayNameES6 = (username) => {
  return `My name is ${username}`;
};

console.log(sayNameES6('BenJammin'));
```
---
## [Arrays](https://login.codingdojo.com/m/612/15808/115679)
An array is a data structure that can hold multiple data types, such as integers, floats, strings, booleans, and objects. Arrays are unique because they are ordered, sequential, and indexed (zero-indexed).
### Characteristics of Arrays
- Arrays are indexed starting from 0, meaning the first element is at index 0, the second element at index 1, and so on.
- Arrays can hold different data types in each position:

|  | 0 | 1 | 2 | 3 | 4 | 5 |  |
| - | - | - | - |- | - | - | - |
| [ | true | 23 | 234.54 | 'aStringggg' | [1,2,3,4] | {'name': 'cameron', 'age':35} | ] |

Despite being able to see the data within an array, the computer only knows the "address" or index position of each element. To access the value, you must specify the array name and the index of the value you want to access.
### Initializing Arrays(Create)
**Store in a variable**: Arrays can be stored in a variable for later use.
**Initialize an empty array**:
```js
let array1 = [];
console.log(`array1.length: ${array1.length}`)
```
Using `.length` **returns the total number of values** in the array
**Initialize an array with values**:
```js
let array2 = [true, 23, 234.54, 'aStringggg', [1, 2, 3, 4], {'name': 'cameron', 'age': 35}];
console.log(myArray);
```
### Accessing Array Elements (ReadOne/ReadAll)
**To access elements** in an array:
- Specify the array name: `myArray`
- Use square brackets `[]` to pass the index of the desired element.
```js
console.log(`array2 READ ALL: ${array2}`)
console.log(array2)
console.log(`array2 READ ONE: ${array2[3]}`)
```
`myArray[3]` will return `'aStringggg'`.
### Manipulating Arrays (Update)
**Update Specific Value**: 
- Using `myArray[0] = "newestValue"` replaces the value at that address.

**Add to the end of an array**: 
- Use `.push()` to append a new value.

**Assign a new value at the beginning of the array**: 
- To maintain all current values while adding a new one at the beginning, use `.unshift()` 
- shifts all elements down one index.
```js
// * At Specific Index
array2[1] = "New index 1 value";
// * At The End
array2.push('New Last Value');
// * At The Front
array2.unshift("yetAnotherNewFirstValue");
console.log(array2);
```
### Removing Elements from an Array (Delete)
**Remove from the beginning**: Use `.shift()`.

**Remove from the end**: Use `.pop()`.

**Remove at specific index**: Use `.splice()`.
```js
// * At The Front
array2.shift();
// * At The End
array2.pop();
console.log(array2);
```
---
## [Conditionals](https://login.codingdojo.com/m/612/15809/115684)
[[JS Intro#Conditionals/Flow Control]]
Conditional statements are composed of three main parts:
1. **Conditional Keyword**: `if`, `else if`, or `else`
2. **Parentheses `()`**: Contain the conditional logic that evaluates to `true` or `false`
3. **Curly Braces `{}`**: Enclose the block of code that executes if the condition is met

- **`if`**: Executes the block of code inside the curly braces `{}` if the condition within the parentheses `()` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). A "truthy" value is any value that is considered true when encountered in a Boolean context.

- **`else if`**: Provides an additional condition to test if the preceding `if` condition is `false`. It has its own condition and block of code, which will run only if its specific condition is met.

- **`else`**: Executes the block of code if none of the preceding `if` or `else if` conditions are met. It does not have a condition of its own.
### ES5 Example
```javascript
function checkNumber(x) {
    // Check if x is greater than 50
    if (x > 50) {
        console.log("The number is greater than 50.");
    } 
    // Check if x is greater than 30 but less than or equal to 50
    else if (x > 30) {
        console.log("The number is greater than 30 but less than or equal to 50.");
    } 
    // Check if x is greater than 10 but less than or equal to 30
    else if (x > 10) {
        console.log("The number is greater than 10 but less than or equal to 30.");
    } 
    // If none of the above conditions are met, x is 10 or less
    else {
        console.log("The number is 10 or less.");
    }
}

// Example calls to the function
checkNumber(5);   // Output: The number is 10 or less.
checkNumber(20);  // Output: The number is greater than 10 but less than or equal to 30.
checkNumber(45);  // Output: The number is greater than 30 but less than or equal to 50.
checkNumber(60);  // Output: The number is greater than 50.
```
- **`if` Statement**: Checks if the variable `x` is greater than 50.
- **`else if` Statements**: Provides additional conditions to check if `x` is within different ranges.
- **`else` Statement**: Acts as a catch-all for any case not covered by the previous conditions.
### Complex Conditionals ES5 Example 
```js
function checkNumber(x) {
    // Check if x is exactly 50
    if (x === 50) {
        console.log("The number is exactly 50.");
    } 
    // Check if x is greater than 50 and an even number
    else if (x > 50 && x % 2 === 0) {
        console.log("The number is greater than 50 and is even.");
    } 
    // Check if x is greater than 50 and an odd number
    else if (x > 50 && x % 2 !== 0) {
        console.log("The number is greater than 50 and is odd.");
    } 
    // Check if x is between 30 and 50, inclusive, or exactly 10
    else if ((x >= 30 && x <= 50) || x === 10) {
        console.log("The number is between 30 and 50, inclusive, or it is exactly 10.");
    } 
    // Check if x is less than 10
    else if (x < 10) {
        console.log("The number is less than 10.");
    } 
    // Default case for numbers between 10 and 30
    else {
        console.log("The number is greater than 10 but less than 30.");
    }
}

// Example calls to the function
checkNumber(5);    // Output: The number is less than 10.
checkNumber(10);   // Output: The number is between 30 and 50, inclusive, or it is exactly 10.
checkNumber(20);   // Output: The number is greater than 10 but less than 30.
checkNumber(35);   // Output: The number is between 30 and 50, inclusive, or it is exactly 10.
checkNumber(50);   // Output: The number is exactly 50.
checkNumber(60);   // Output: The number is greater than 50 and is even.
checkNumber(75);   // Output: The number is greater than 50 and is odd.
```
---

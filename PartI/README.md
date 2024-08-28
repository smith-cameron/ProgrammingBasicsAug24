# W1D1 Welcome to Programming Basics
## __House Keeping__
- Zipping/Submitting Files
	If there is more than one file/folder
	- ZIP THE CONTAINING FOLDER!
- File_Folder_Naming
	- File_Naming or FileNaming or file_naming or fileNaming 
	- just NOT File Naming (spaces)
	- [Different_casings_explained](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)
****__Overall, avoiding spaces in file and directory names is often seen as a way to minimize potential problems, maintain consistency, and ensure compatibility across different tools and environments.__****
**Command Line Issues**:
    - **Escaping Spaces**: In many command-line interfaces, spaces in file or directory names must be escaped (e.g., using a backslash `\`) or enclosed in quotes. This adds extra steps and complexity, making commands more prone to errors.
    - **Parsing Problems**: Scripts or programs that parse file paths can get confused by spaces, interpreting them as separate arguments unless handled properly.
**Legacy and Script Compatibility**:
    - **Older Scripts and Programs**: Older scripts, programs, or tools might not be designed to handle spaces well, leading to unexpected errors or behavior.
    - **Automation**: Automated processes, like batch scripts or cron jobs, often need to handle file paths efficiently. Spaces can introduce complexity and increase the likelihood of bugs.
**Consistency and Simplicity**:
    - **Naming Conventions**: Many developers prefer to use naming conventions like underscores (`_`) or hyphens (`-`) instead of spaces to maintain consistency across projects and avoid potential issues.
**Version Control Systems**:
    - **Merge Conflicts**: Spaces in file or directory names can sometimes complicate operations in version control systems like Git, especially when merging branches or resolving conflicts.
- Discord **THREADS**
	- Use Them Please!

---
## VsCode/node
[VsCode](https://login.codingdojo.com/m/612/13875/98873)
[Download - VsCode](https://code.visualstudio.com/download)
### Set Up
Some VsCode features are user specific and should fit your own workstyle
	(which you will develop as you go if you don't already know)
- [ ] Auto Save
- [ ] Hot Exit
- [ ] Indentation
- [ ] Terminal defaults
### Workspaces
If you want to use a workspace... have one workspace regardless of your file structure
### Extensions
- [ ] Code Runner
- [ ] Indent Rainbow
- [ ] Live Server
- [ ] Better code comments
- [ ] Prettier - code formatting
- [ ] Auto Close Tag
- [ ] Auto Rename Tag

### Keyboard Shortcuts
[KeyBinding - DOCS](https://code.visualstudio.com/docs/getstarted/keybindings)
[KeyBinging Reference - DOCS](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)
## Node
[Download - Node](https://nodejs.org/en/download/prebuilt-installer)

---
# JS Basics
## [Variables & Data Types](https://login.codingdojo.com/m/612/15805/115666)
### Running JS
1. `node file_name.js`
2. Code Runner extension

### Variables
Variables are like file folders that hold information (data).
You can name a variable and store data inside it, allowing you to access that data by referring to the variable by name later.
#### [naming conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_names)
### Block Scoping Overview
Block scoping refers to the concept of scoping variables within a specific block of code, which is defined by opening and closing curly braces `{}`. This allows variables to be limited in their visibility and lifespan to the block they are declared in.
### `var, let & const
#### `const`
- **Block Scoped**: Variables declared with `const` are confined to the block in which they are declared.
- **Must Assign a Value at Creation**: A `const` variable must be initialized with a value at the time of declaration.
- **Immutable Value**: The value assigned to a `const` variable cannot be changed or reassigned after its initial assignment. However, note that if the value is an object or array, its properties or elements can still be modified.

  ```javascript
  const x = 10;
  x = 20; // Error: Assignment to constant variable.

  const obj = { key: 'value' };
  obj.key = 'newValue'; // This is allowed.
  ```

#### `let`
- **Block Scoped**: Variables declared with `let` are also confined to the block in which they are declared.
- **Allows Value Reassignment**: Unlike `const`, `let` allows you to reassign a new value to the variable.
- **Does Not Require Initialization**: A `let` variable can be declared without an initial value, though it must be initialized before being used.

  ```javascript
  let y = 5;
  y = 10; // Allowed

  let z;
  z = 15; // Allowed after declaration
  ```

#### `var`
- **Function Scoped**: Variables declared with `var` are scoped to the function in which they are declared, or globally if declared outside of a function. They are not limited to the block in which they are declared.
- **Allows Value Reassignment**: Similar to `let`, `var` allows for reassignment of its value.
- **Hoisting**: Variables declared with `var` are "hoisted" to the top of their scope, meaning they can be used before their actual declaration line in the code. However, the value assignment is not hoisted.

  ```javascript
  console.log(a); // undefined (hoisted declaration, but not assignment)
  var a = 3;
  ```

#### General Breakdown

1. **Scope**: 
   - `const` and `let` are block scoped, meaning their scope is limited to the block enclosed by `{}`.
   - `var` is function scoped or globally scoped, not confined to block-level scopes.

2. **Reassignment**:
   - `const` does not allow reassignment of the variable itself.
   - `let` and `var` both allow reassignment of their values.

3. **Initialization**:
   - `const` requires an initial value at the time of declaration.
   - `let` and `var` do not require an initial value upon declaration, but `let` must be initialized before use.

4. **Hoisting**:
   - `var` is hoisted, meaning its declaration is moved to the top of its scope, but its assignment remains where it was originally written.
   - `let` and `const` are also hoisted but are not initialized until their actual declaration is encountered in the code (Temporal Dead Zone). This means you cannot use them before their declaration line.
---
## Code Comments
- Comments are lines in your code that start with `//` and are ignored by the computer when running the code.
- They are used to explain code to humans reading it, including your future self.
- JavaScript uses `//` for single-line comments and `/* */` for multi-line comments.
- VsCode keyboard shortcut `ctrl + /`
```js
// This is a comment explaining the following line of code
//var myNum = 5;
var isHungry = true;
/* These are
many lines 
of comments
*/
```
Importance:
- Comments are valuable for explaining your thought process
- Making your code easier to understand for both yourself and others.
- Pseudo Code
- Temporarily override code with alternate code
Best Practices:
	In general, use single-line comments to comment code. Writers must mark each line of the comment with `//`, so that it's easier to notice commented-out code visually. In addition, this convention allows to comment out sections of code using `/* … */` while debugging.

---
## Data Types in JavaScript
### **Undefined**
- Represents a variable that has been declared but not yet assigned a value.
```js
var myVar;
console.log(myVar); // Output: undefined
```
### **Null**
- An explicitly assigned value indicating that a variable is intentionally empty.
- Unlike undefined, which is assigned by default to uninitialized variables, null is set on purpose.
```js
var myNullVar = null;
console.log(myNullVar); // Output: null
```
### **String**
- Probably the most used data type in web development
- A sequence of characters grouped together, enclosed in quotation marks ("" or '').
- Strings can contain letters, numbers, spaces, and symbols.
- Strings are used to represent text data
```javascript
var python = "Python";
let myFavLang;
const javaScript = "JavaScript";
let myLeastFavLang = null;
console.log(`python: ${python}`);
console.log(`myFavLang: ${myFavLang}`);
// console.log(myFavLang)
console.log(`javaScript: ${javaScript}`);
console.log(`myLeastFavLang: ${myLeastFavLang}`);
python = 'python 3.12';
console.log(`python new value: ${python}`);
// javaScript = "Java";
myFavLang = python;
console.log(myFavLang);
// console.log(myName)
function stringVariables(input){
    // Location = Value
    let welcomeString = `My favorite language to code in is... ${input}`;
    console.log(welcomeString);
}
stringVariables(myFavLang);
stringVariables(javaScript);
```
**Key Point:**
- When numbers are included within quotation marks, they are treated as strings, not numbers.
- Arithmetic operations cannot be performed on string data.
```javascript
var exampleOfStringWithNumberInside = "I was born in 1985";
var exampleOfNumber = 1985;
// Only exampleOfNumber can be used in calculations, not exampleOfStringWithNumberInside.
```
#### Template literals 
A feature in JavaScript that allows for easier string interpolation and multi-line strings. 
They are enclosed by backticks (`) instead of single (') or double (") quotes.

Key features of template literals include:

1. String Interpolation: You can embed expressions within a string using ${expression} syntax. For example:

```javascript

const name = 'Cameron';
const greeting = `Hello, ${name}!`;
// Output: "Hello, Cameron!"
```
2. Multi-line Strings: Template literals can span multiple lines without needing special characters for line breaks:

```javascript

const multiLine = `This is a
multi-line string.`;
```
3. Tagged Templates: You can use template literals with a function (called a tag) to process the template literal. This is useful for custom parsing or formatting:

```javascript

    function tag(strings, ...values) {
      // Custom processing logic
    }
    tag`Hello ${name}`;
```
Template literals make it easier to construct complex strings dynamically and format them more readably.
### **Boolean**
- Represents logical values: true or false.
- Often used in conditions and comparisons.
```js
function eatFood(){
    console.log("nom nom nom");
    return false;
}

function boolVariables(){
    // Represents logical variables of True/False
    let isHungry = true;
    console.log(`isHungry: ${isHungry}`);
    console.log(typeof isHungry);
    isHungry = eatFood()
    console.log(`isHungry: ${isHungry}`);
}
boolVariables();
```
### **Number**
- Represents both whole numbers and floating point numbers (decimals).
- You can perform mathematical operations using variables that store numbers.
```javascript
var myNum = 5;
var myOtherNum = 10.5;
console.log(typeof myNum, myNum)    //output--> number 5
console.log(typeof myOtherNum,myOtherNum)   //output--> number 10.5
console.log(typeof (myNum + myOtherNum - .5), myNum + myOtherNum - .5)  
//output--> number 15
console.log(myNum + myOtherNum);    //output--> 15.5
```



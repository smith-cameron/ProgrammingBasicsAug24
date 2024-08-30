# [For Loops](https://login.codingdojo.com/m/612/15813/115700)
*Why do we need loops?*
Finding and/or manipulating data (inside an iterable data type)
## Structure/Syntax
Every loop (both for and while) have 4 parts
- Start (iterator)
- Stop/Boundary
- Step (rate of movement)
- Body (what it does)
### For
The for loop is used when you know in advance how many times you want to execute a statement or a block of code.
    
    Defined horizontally
```js
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```
```js
  //     Start ;     Stop ;       Step
  for (let i = 0; i < 20; i ++){
    // Do Work
  }
```
### While
The while loop is used when you want to repeat a block of code as long as a specified condition is true. It's typically used when the number of iterations is not known in advance.

    Defined vertically
```js
initialization
while (condition) {
    // code to be executed
    increment/decrement
}
```
```js
let i = 0 // Start
while(i < 20){    //Stop/Boundary
  //Do Work

  i++ //Step
}
```

Both can be reversed with a negative step
### Flow control
#### continue
`continue` keyword skips an iteration in a loop. 
If it’s 
- at the very beginning of a loop, the entire iteration is skipped; 
- in the middle of a loop, the rest of the current iteration is skipped, 

#### break
`break` keyword causes immediate termination of a loop or branching statement

#### return
`return someValue` keyword causes immediate termination of a function and returns someValue to the function call 
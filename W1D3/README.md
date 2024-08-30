## [For Loops](https://login.codingdojo.com/m/612/15813/115700)
*Why do we need loops?*
Finding and/or manipulating data (inside an iterable data type)
### Structure/Syntax
Every loop (both for and while) have 4 parts
>Start (iterator)
>Stop/Boundary
>Step (rate of movement)
>Body (what it does)
#### For
Defined horizontally
```js
function forLoopsMan(arr){
  //     Start ;     Stop ;       Step
  for (let i = 0; i < arr.length; i ++){
    // Do Work
    console.log("I'm counting! The number is ", i);
    console.log(arr[i])
  }
  console.log("We are done. Goodbye world!");
  return arr
}
console.log(forLoopsMan(myArray))
```
#### While
Defined vertically
```js
function whileLoopsMan(arr){
  let i = 0 // Start
  while(i < arr.length){    //Stop/Boundary
    //Do Work
    console.log("I'm counting! The number is ", i);
    console.log(arr[i])
    i++ //Step
  }
  return arr
}
console.log(whileLoopsMan(myArray))
```

Both can be reversed with a negative step
#### Flow control
##### continue
`continue` keyword skips an iteration in a loop. 
If it’s 
- at the very beginning of a loop, the entire iteration is skipped; 
- in the middle of a loop, the rest of the current iteration is skipped, 

##### break
`break` keyword causes immediate termination of a loop or branching statement

##### return
`return someValue` keyword causes immediate termination of a function and returns someValue to the function call 
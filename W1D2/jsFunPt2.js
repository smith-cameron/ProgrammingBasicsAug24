// _ W1D2 - Functions, Arrays, Conditionals

// _ FUNCTIONS
//. function Keyword: 
    //* Defines/initializes the function.
//. Name: 
    //* Specifies what the function is called(like a variable name).
//. Parentheses: 
    //* Enclose any parameters.
//. Parameters: 
    //* Input values for the function (optional).
//. Curly Braces and Indentation: 
    //* Encloses the body of the function.
//. Body: 
    //* Contains the instructions the function will execute.
//. Return Statement: 
    //* Specifies what the function returns (Optional).
//. Function Call: 
    //* Executes the function. 

function exampleFunction(input){
    // Do stuff and things
    console.log("doing stuff and things");
    // return some of the things stuff made
    return `Hello ${input}, how are you today?`
}
exampleFunction("Anthony")
console.log(exampleFunction("Anthony"))

// _ ARRAYS
//. An array is a data structure that can hold multiple data types
    //? integers
    //? floats
    //? strings
    //? booleans
    //? objects
//. Arrays are unique because they are 
    //* ordered
    //* sequential
    //* indexed (zero-indexed).


// _ Array CRUD (Create, Read, Update, Destroy/Delete)
function arrays(){
    // < Create 
    // * Empty
    let array1 = [];
    console.log(`array1.length: ${array1.length}`);
    // * w/ Values
    //.    INDEX [    0  ,  1 ,    2   ,       3      ,     4     ,         5                        ]
    let array2 = [  true , 23 , 234.54 , 'aStringggg' , [1,2,3,4] , {'name': 'DB Cooper', 'age':36}  ];
    console.log(`array2.length: ${array2.length}`);
    
    // < Read
    // * All
    // console.log(array2);
    // * One
    let thisOne = array2[3];
    // console.log(thisOne)
    
    // < Update
    // * At Specific Index
    array2[3] = "aDifferentStinrgggggggg";
    // * At The End
    array2.push(false);
    // * At The Front
    array2.unshift("qwerty");
    array2.splice(3, 1, 3.14);
    console.log(array2);
    
    // < Delete/Destroy
    // * At The Front
    array2.shift();
    // * At The End
    array2.pop();
    console.log(array2);
}


// _ Conditionals
// . Conditional Keywords 
    // * if 
        // ! Executes {} if the condition () is true
        // ! If it is false the {} is skipped
    // * else if
        // ! Provides an additional condition to test if the preceding if condition is false
    // * else
        // ! Executes the block of code if none of the preceding `if` or `else if` conditions are met. 
        // ! It does not have a (condition) of its own.
// . Parentheses ()
    // * Contain the conditional logic that evaluates to `true` or `false`
// . Curly Braces {}
    // * Enclose the block of code that executes if the condition is met


function checkNumberValue(input){
    console.log(input);
    // check if the incoming number is even
    if(input % 2 == 0){
        console.log(`Value ${input} is even.`);
    }
    // check if the incoming number is odd
    if(input % 2 == 1){
        console.log(`Value ${input} is odd.`);
    }
    // if the incoming value is greater than 50 log something
    if(input > 50){
        console.log(`Value ${input} is greater than 50.`);
    }
    // if the incoming values is less than 50 but over 30 log something else
    else if(input > 30){
        console.log(`Value ${input} is greater than 30 but less than 50.`);
    }
    // if the incoming value is less than 30 but over 10 log something else
    else if(input > 10){
        console.log(`Value ${input} is greater than 10 but less than 30.`);
    }
    // else handle any other incoming numbers less than the above conditions
    else{
        console.log(`Value ${input} less than 10.`);
    }
}
checkNumberValue(57);
checkNumberValue(37);
checkNumberValue(12);
checkNumberValue(6);

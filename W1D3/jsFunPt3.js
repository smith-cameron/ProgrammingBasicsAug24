// _ W1D3 - LOOPS

// < Every loop (both for and while) have 4 parts
    // . Start (iterator)
    // . Stop/Boundary
    // . Step (rate of movement)
    // . Body (what it does)

// _ for Loops
function forLoopBasic(){
    //KW(  START  ;  STOP ;  STEP    )
    for (let i = 0; i < 10; i = i + 1){
        // DO WORK
        if(i % 2 == 0){ 
            continue    // if i is even skip this iteration
        }
        if(i == 7){ 
            break   // if i is 7 we stop looping
        }
        console.log(i);
    }
    console.log("looping done, going home")
}
forLoopBasic();

function forLoopArray(inputAray){
    console.log(inputAray);
    console.log(`inputAray.length: ${inputAray.length}`);
    for (let i = 0; i < inputAray.length; i++){
        if(inputAray[i] == 25){
            return "We found 25" 
            // return ends the funtion running 
            // and returns the value to function call
        }
        console.log(`iterator: ${i}`);
        console.log(`value: ${inputAray[i]}`);
    }
}
// console.log(forLoopArray([10,146,25,-3,4.5,588]));

// _ while Loops
function whileLoops(inputArray){
    let i = 0; //START
    while(i < inputArray.length){ //STOP/BOUNDARY
        // DO WORK
        console.log(`iterator: ${i}`);
        console.log(`value: ${inputArray[i]}`);
        i += 1; // STEP
    }
}
// whileLoops([10,146,25,-3,4.5,588]);

// _ Algorithm Practice
// ? Write a function called `analyzeArray` that takes an array of numbers as input and logs the
    // , largest value
    // , smallest value
    // , and average of all values.

function analyzeArray(input){
    console.log(input);
    // establish some variables min, max mean
    let min = input[0];
    let max = input[0];
    let sum = 0;
    // console.log(`init sum: ${sum}`);
    // loop through array to access each value
    for(let i = 0; i < input.length; i++){
        // increment sum with each value
        sum += input[i];
        // console.log(`incrementing sum: ${sum}`);
        
        // compare values for max
        if(input[i] > max){
            // update current value of max with new value at current index of input
            max = input[i];
        }
        // compare values for min
        if(input[i] < min){
            // update current value of min with new value at current index of input
            min = input[i];
        }

    }
    // console.log(`Final sum: ${sum}`);
    // print average: total divided by the number of things
    console.log(`Mean: ${(sum / input.length).toFixed(4)}`);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);

}
// analyzeArray([10,146,254,23,4.5,588]);
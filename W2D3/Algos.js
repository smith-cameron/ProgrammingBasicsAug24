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

function popFront(input){
    console.log(input);
    let output = input[0];
    // let output;
    // shift everything in the array to its current index -1
    // loop through the array
    // start on index 1 because we are removing index 0
    for(let i = 1; i < input.length; i++){
        // console.log(input[i]);
        input[i-1] = input[i];
        console.log(input);
    }
    input.length --;
    // input.pop();
    console.log(input);
    return output;
}
// let x = popFront([15,2,3,4,5]);
// console.log(x);

function insertAt(input, location, value){
    console.log(input);
    console.log(location);
    console.log(value);
    // add in index to the array
    // move everything from location backwards one index
    // input.length++;
    // console.log(input);
    // put a value into the array, 
    input[input.length] = value;
    console.log(input);
    // then store the value, 
    let value1 = value;
    // then shift each element to the right 
    // until the location is found
    for(let i = input.length-1; i > location; i--){
        input[i] = input[i-1];
        console.log(input);
        // input[location] = value1;
    }
    input[location] = value1;
    console.log(input);

    // and insert the value into the correct location(index)

}
// insertAt(["how","now","brown","cow"], 2, false);
// Array, index, value to insert

function removeAt(input, index){
    console.log(input, index);
    let value = input[index];
    // console.log(value);
    for(let i = index; i < input.length-1; i++){
        input[i] = input [i+1];
        console.log(input);
    }
    input.pop();
    console.log(input);
}
removeAt(['how', 'now', false, 'brown', 'cow'], 2);
// Array, index, value to remove
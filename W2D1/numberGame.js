const prompt = require('prompt-sync')();
// const name = prompt("what is your name?")
// console.log(name)

function randomNumberTest(){
    // Generate random number from 0 - 1(exclusive - not 1)
    let number = Math.random();
    console.log(number);
    // Scale that float/decimal to whole integer 0 - 9
    let scaledNumber = number * 10;
    console.log(scaledNumber);
    // Round down to nearest whole integer (this will automatically include 9 as our upper boundary)
    let roundedNUm = Math.floor(scaledNumber);
    console.log(roundedNUm);
}
// randomNumberTest()

function generateRandomNum(){
    return Math.floor(Math.random()*10);
}

function numberGame(){
    // Display symbols representing 0 - 9
    //                0 , 1   2   3   4   5   6   7   8   9 
    const symbols = ['!','@','#','$','%','^','&','*','(',')'];
    console.log(`symbols: [${symbols}]`);
    // num1 + num2 = totalValue
    const num1 = generateRandomNum();
    // display first number of addition equation as a symbol
    const num2 = generateRandomNum();
    console.log(`Hint: ${num2}`);
    const sum = num1 + num2;
    // display total to subtract the symbol from
    console.log(`Total: ${sum}`);
    // Accept user input symbol
    const userGuess = prompt("Enter your guess for the missing number (symbol): ");
    // Find the corresponding index for that symbol in the sybols array
    let guessValue = "not a symbol";
    for(let symbolIndex = 0; symbolIndex < symbols.length; symbolIndex++){
        if(userGuess == symbols[symbolIndex]){
            // compare that index to num1
            guessValue = symbolIndex;
            break;
        }
    }
    // we will inform the user of the accuracy of thier guess
    // if(guessValue == num1){
    //     console.log(`Your Guess of ${guessValue} is correct!`);
    // }
    // else if(guessValue == "not a symbol"){
    //     console.log(`Your Guess is ${guessValue}. Play by the rules please.`);
    // }
    // else{
    //     console.log(`Your Guess of ${guessValue} is NOT correct!`);
    // }
    const isCorrect = guessValue == num1;
    console.log(`Your Guess ${isCorrect ? 'of' : 'is'} ${guessValue} is ${isCorrect ? "correct" : "wrong"}`);
    
}
numberGame();

// () parenthases
// [] square brackets
// {} curly brackets/braces
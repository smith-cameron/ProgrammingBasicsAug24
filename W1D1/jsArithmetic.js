


function basicArithmeticExamples() {
    let a = 10;
    let b = 3;



// Addition
let sum = a + b;
console.log(`Addition (a + b): ${a} + ${b} = ${sum}`); // Outputs 10 + 3 = 13

// Subtraction
let difference = a - b;
console.log(`Subtraction (a - b): ${a} - ${b} = ${difference}`); // Outputs 10 - 3 = 7

// Multiplication
let product = a * b;
console.log(`Multiplication (a * b): ${a} * ${b} = ${product}`); // Outputs 10 * 3 = 30

// Division
let quotient = a / b;
console.log(`Division (a / b): ${a} / ${b} = ${quotient}`); // Outputs 10 / 3 = 3.3333333333333335

// ------------------------------------------
// Increment
let increment = a;
increment++;
console.log(`Increment (a++): ${a} incremented = ${increment}`); // Outputs 10 incremented = 11

// Decrement
let decrement = a;
decrement--;
console.log(`Decrement (a--): ${a} decremented = ${decrement}`); // Outputs 10 decremented = 9

// ------------------------------------------
// Addition Assignment
let addAssign = a;
addAssign += b;
console.log(`Addition Assignment (a += b): ${a} += ${b} = ${addAssign}`); // Outputs 10 += 3 = 13

// Subtraction Assignment
let subAssign = a;
subAssign -= b;
console.log(`Subtraction Assignment (a -= b): ${a} -= ${b} = ${subAssign}`); // Outputs 10 -= 3 = 7

// Multiplication Assignment
let mulAssign = a;
mulAssign *= b;
console.log(`Multiplication Assignment (a *= b): ${a} *= ${b} = ${mulAssign}`); // Outputs 10 *= 3 = 30

// Division Assignment
let divAssign = a;
divAssign /= b;
console.log(`Division Assignment (a /= b): ${a} /= ${b} = ${divAssign}`); // Outputs 10 /= 3 = 3.3333333333333335

// ------------------------------------------
// Modulus
let remainder = a % b;
console.log(`Modulus (a % b): ${a} % ${b} = ${remainder}`); // Outputs 10 % 3 = 1

// Exponentiation
let power = a ** b;
console.log(`Exponentiation (a ** b): ${a} ** ${b} = ${power}`); // Outputs 10 ** 3 = 1000

// Modulus Assignment
let modAssign = a;
modAssign %= b;
console.log(`Modulus Assignment (a %= b): ${a} %= ${b} = ${modAssign}`); // Outputs 10 %= 3 = 1

// Exponentiation Assignment
let expAssign = a;
expAssign **= b;
console.log(`Exponentiation Assignment (a **= b): ${a} **= ${b} = ${expAssign}`); // Outputs 10 **= 3 = 1000

// ------------------------------------------
// Floor Division
let floorDivision = Math.floor(a / b);
console.log(`Floor Division (Math.floor(a / b)): Math.floor(${a} / ${b}) = ${floorDivision}`); // Outputs Math.floor(10 / 3) = 3

// Truncation
let truncDivision = Math.trunc(a / b);
console.log(`Truncation (Math.trunc(a / b)): Math.trunc(${a} / ${b}) = ${truncDivision}`); // Outputs Math.trunc(10 / 3) = 3

// Round
let roundDivision = Math.round(a / b);
console.log(`Round (Math.round(a / b)): Math.round(${a} / ${b}) = ${roundDivision}`); // Outputs Math.round(10 / 3) = 3
}

basicArithmeticExamples();
console.log("Welcome to Programming Basics");

// < String VARIABLES
function stringVariables(){
    //< LOCATION = VALUE
    //, var: mutable
    var myName = "Cameron";

    //, let & const
    //, let: mutable
    //, const: immutable
    let myMiddleName = "David";
    // console.log(myMiddleName);
    myMiddleName = "Lander";
    // console.log(myMiddleName);
    const myLastName = "Smith";
    // console.log(myLastName);
    // myLastName = "Taylor";

    /*
    ,comment out block of code or
    ,provide block of code comments
    ,on multiple lines
    */

    //. "char" - string of 1
    let initial_first_name = 'C';

    //. undefined
    let myFavLang;
    console.log(myFavLang);

    //. null
    let myLeastFavLang = null;
    console.log(myLeastFavLang);
    myFavLang = "javaScript";
    // Using a variable in a string
    let favString = `My favorite language to code in is... ${myFavLang}`;
    console.log(favString);
    let dob = "12211987";
    // concatonatation
    console.log(dob + 1);
    console.log(dob + myName);

}
// stringVariables();

function eat(){
    console.log("nom nom nom");
    return false;
}

function BoolVariables(){
    //, Boolean: Value that asses true or false
    let isHungry = true;
    console.log(isHungry);
    console.log(typeof isHungry);
    isHungry = eat();
    console.log(isHungry);
}
// BoolVariables();

function numberVariables(){
    // . represent whole or partial number.
    // . Float is the same in js an a number
    let num1 = 10;
    let num2 = 3.14;
    console.log(typeof num1, num1)
    console.log(typeof num2, num2)
    num1++
    num1 = num1 + 1
    num1 += 1
    console.log(num1)
}
// numberVariables();

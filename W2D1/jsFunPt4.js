//  _ W2D1 - Objects ... and other stuff

// _ Object Literals
// . KEY : VALUE pairs 
    // * separated by a colon
    // * bound by curly brackets/braces
    // * separated by comas
// . mixed data types (even functions)
// . unordered
// . possible nested values
// . iterable

// _ Object CRUD
// < Create
const emptyObj = {};
const myObj = {
    'first Name' : 'Cameron',
    "lastName" : 'Smith',
    age : 36,
    kids : ['thing1', 'thing2'],
    shoppingList : {
        $ : 200,
        1 : "apples",
        2 : "bread"
    },
    soundsIMake(){return "grunt....*sigh*"},
    addresses : [
        {street : '123 where i live', city : "Julian"},
        {street : '456 where i used to live', city : "San Diego"}
    ]
}

function objectActions(){
    // < Read
    // * All
    console.log(myObj);
    // * One
    console.log(myObj["first Name"]);
    console.log(myObj.age);
    console.log(myObj.kids);
    console.log(myObj.shoppingList);
    console.log(myObj.soundsIMake);
    console.log(myObj.addresses);
    // * Nested
    console.log(myObj.soundsIMake());
    console.log(myObj.addresses[1].street);
    console.log(myObj.shoppingList.$);

    // < Update
    myObj.age = 37;
    console.log(myObj);

    console.log(emptyObj);
    emptyObj.firstName = "bugs";
    emptyObj.lastName = "bunny";
    console.log(emptyObj);

    // < Delete/Destroy
    delete myObj.addresses;
    console.log(myObj)
}
// objectActions();

// _ Turnery
// . condition ? expressionIfTrue : expressionIfFalse;
    // * condition 
        // ! followed by a question mark
    // * an expression to execute if the condition is truthy 
        // ! followed by a colon
    // * the expression to execute if the condition is falsy

function turneryOperator(){
    let ageStatus = myObj.age >= 18 ? 'Adult' : 'Minor';
    console.log(ageStatus); //Adult
    myObj.age = 16;
    console.log(ageStatus); //Minor
}
// turneryOperator();
function ageCheck(){
    return myObj.age >= 18 ? 'Adult' : 'Minor';
}
console.log(ageCheck()); //Adult
myObj.age = 16;
console.log(ageCheck()); //Minor

// _ Switch
// . switch (expression): 
    // * This is the value that you want to evaluate
// . case value: 
    // * Each case represents a potential match for the expression. 
    // * If the expression matches a `case` value, the corresponding block of code is executed.
// . break;
    // * exits the `switch` statement once a matching case is found
// . default:
    // * optional case that executes if none of the specified cases match the expression
    // * equivalent of an else



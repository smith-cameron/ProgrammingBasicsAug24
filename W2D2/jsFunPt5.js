// _ W2D2 More Msc JS Stuff

// _ Switch
// . switch (expression): 
    // * This is the value that you want to evaluate
// . case value: 
    // * Each case represents a potential match for the expression. 
    // * If the expression matches a case value, the corresponding block of code is executed.
// . break;
    // * exits the `switch` statement once a matching case is found
// . default:
    // * optional case that executes if none of the specified cases match the expression
    // * equivalent of an else
function lunchSwitch(){
    // let fruitInMyLucch = "apple";
    // let fruitInMyLucch = "strawberry";
    // let fruitInMyLucch = "banana";
    let fruitInMyLunch = "plum";
    
    switch (fruitInMyLunch){
        case "banana":
            console.log("Ewwwwwwww...");
            break;
        case "strawberry":
        case "apple":
            console.log("Yes, more please!");
            break;
        default:
            console.log("I dont like that becasue I havent tried it yet!");
    }
}
// lunchSwitch()

function rangeSwitch(ageInput){
    switch (true){
        case ageInput < 30:
            console.log("Are you in college?");
            break;
        case ageInput > 64:
            console.log("Senior discount?");
            break;
        default:
            console.log("Full price sucker");
    }
}
// rangeSwitch(34);

// _ Try - Catch - Finally
// .    Executed first
// ,      try { 
// ,          tryStatements
// ,      } 
// .    If the try throws an exception
// .    the code in the catch block will be executed.
// ,      catch (exceptionVar) {
// ,          catchStatements
// ,      } 
// .    Will always be executed
// ,     finally {
// ,         finallyStatements
// ,     }

function tryingStuff(){
    try{
        console.log("string: undefinedVariable");
        console.log(undefinedVariable);
    }
    catch (unicorn){
        console.log('THIS IS THE ERROR');
        console.log(unicorn.message);
    }
    finally{
        console.log("one last task to do before other stuff and things");
    }
    console.log("other things happening to stuff");

}
// tryingStuff();



// _ Positional/Default Arguments
// * Positional arguments are the basic type of arguments passed to a function
// * Default arguments are parameters that have predefined values 
    // * if no value (or `undefined`) is passed when the function is called

function arguing(param1 = "to the", param2 = "jungle"){
    console.log(`Welcome ${param1} ${param2}`);
}
arguing();
arguing("Nathan");
arguing("Nathan", "Doe");
arguing(undefined, "Nathan");
arguing(0, 1);


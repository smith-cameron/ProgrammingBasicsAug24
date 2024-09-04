
## Object Literals
- KEY : VALUE pairs 
	- separated by a colon
	- bound by curly brackets
	- separated by comas
- mixed data types (even functions)
- unordered
- possible nested values
### Create/Structure
```js
const emptyObj = {};
const myObj = {
    'first Name' : 'cameron',
    "lastName" : "Smith",
    age: 36,
    kids: ["thing1", 'thing2'],
    "shoppingList" : {
        $: 200,
        1: "apple",
        2: "oranges"
    },
    soundsIMake() {return "Grunt... *sigh*"},
    addresses : [
        {street: '123 where i live', city: 'julian'},
        {street: '456 where i used to live', city: 'san diego'}
    ]
};
```
OUTPUT:
```js
{
  'first Name': 'cameron',
  lastName: 'Smith',
  age: 35,
  kids: [ 'thing1', 'thing2' ],
  shoppingList: { '1': 'apple', '2': 'oranges' },
  sounds: [Function: sounds]
}
```
Keys:
- can be anything that can be coerced into a string (strings(quotes or none), integers, symbols)
	- `$: 35,` would work yes
- if your key name contains spaces, you need to wrap it in quotes
### Read
Use dot notation or square brackets
```js
console.log(myObj);
console.log(myObj["first Name"]);
console.log(myObj.lastName);
console.log(myObj.kids);
console.log(myObj.shoppingList);
console.log(myObj.sounds);
```
OUTPUT:
```js
cameron
Smith
35
[ 'thing1', 'thing2' ]
{ '1': 'apple', '2': 'oranges' }
[Function: sounds]
```

#### ReadOne/Read Nested Values
```js
console.log(myObj.kids[0])
console.log(myObj.sounds())
console.log(myObj.addresses[1].street)
```
OUTPUT:
```js
thing1
Grunt... *sigh*
456 where i used to live
```
### Update
Updating or modifying properties of an object is done by assigning new values to existing keys.
If the key is not present, it will be added.
```js
myObj.age = 37;
console.log(myObj.age);
emptyObj.firstName = "Bugs";
console.log(emptyObj);
```
**FUN FACT**s: 
- const will allow values to change but not the data type originally declared (or location in memory)
- *arrays in js are objects under the hood. key 0: value, key 1: value*
### Delete
```js
delete myObj.shoppingList;
console.log(myObj);
```
---
## [Turnery Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
`condition ? expressionIfTrue : expressionIfFalse;`
The only JavaScript operator that takes three operands: 
- a condition followed by a question mark (`?`)
- then an expression to execute if the condition is **truthy** followed by a colon (`:`)
- finally the expression to execute if the condition is **falsy**. 
This operator is frequently used as a shortcut for the `if` statement.
**USE CASE**: binary if-else conditional
```js
function turneryOperator(){
    let status = myObj.age >= 18 ? 'Adult' : 'Minor';
    console.log(status);
}
turneryOperator();
```

```js
function ageCheck(){
    return myObj.age >= 18 ? 'Adult' : 'Minor';
}
console.log(ageCheck());
myObj.age = 16;
console.log(ageCheck());
```
---

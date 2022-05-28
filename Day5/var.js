/** const Rate = 45;
Rate =50;
*/

// Error: Assignment to constant variable.
// var.js:2 Uncaught TypeError: Assignment to constant variable.
//     at var.js:2:6


var num1=10; //declare and initialize
console.log(num1);

var num1=20; //re-declare and initialize
console.log(num1);
document.write(num1);

let num2=30; //declare and initialize
console.log(num2);

function displayInfo(name, address)
{
    console.log("Name is "+name);
    console.log("Address is "+address);
}
displayInfo();
function displayInfoV2(name= "Broadway", address="Ktm")
{
    console.log("Name is "+name);
    console.log("Address is "+address);
}
displayInfoV2();

// displayInfoV2( ,"Raj");
// Error 
// Uncaught SyntaxError: Unexpected token ','
// displayInfo(,"ktm"); //it cant be done because of missing parameter

// !nested function
function ShowMessage(fullName){
    function SayHi(){
        console.log(`Hi Mr.${fullName}`);
    }
    return SayHi();
}
ShowMessage("Raj");

//! Hosting Variable
console.log(var1); //undefined
var var1="Broadway";

var var2;
console.log(var2); //undefined
var2 = 1;

// console.log(var3);
// let var3 = "Broadway";

f1();

function f1(){
    console.log("This function has been hosted.");
}

// function f11(num1){
//     if(num1=11){
//         return 0;
//     }
//     else {
//         console.log(num1);
//         f11(num1+1);
//     }
// }
// f11(1);

//! function expressions

var add = function sum(val1,val2){
    return val1+val2;
}

var result1 = add(10,20);
console.log(result1);

var result2 = add(10,20); //not valid

//! Anonymous function
var ShowMessage = function(){
    console.log("Hi");
};
ShowMessage();

//! Arrow Function Important
//* Arrow Function
var SayHi = (message) => console.log(message);

var sum = (num1, num2)=>{
    var num3 = num1+num2;
    console.log(num3);
    return num3;
}

//! Rest Parameters
function calcSum(...args){
    let total = 0;
    for(let num of args){
        total+=num;
    }
    return total;
}

console.log(calcSum(1,2,3,4,5));

// fundamental of OOP
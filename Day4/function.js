/**

// functions
function sum(num1, num2) {
    var num3 = num1 + num2;
    return num3;
}
// call
// Only 2 parameter in function 
var result = sum(34, 16);
console.log(result);// 50

// difference 
function difference(i, j) {
    var diff = i - j;
    return diff;
}
var finalresult = difference(10, 5);
console.log(difference(10, 5));  // 5
// or
console.log(finalresult);  // 5

function product(num1, num2) {
    var num3 = num1 * num2;
    return num3;
}
var multiply = product(10, 5);
console.log(multiply); // 50

function division(num3, num4) {
    var num5 = num3 / num4;
    return num5;
}
var divide = division(10, 5);
console.log(divide); // 50

function reminder(num7, num6) {
    var num8 = num7 % num6;
    return num8;
}
var remainders = reminder(10, 5);
console.log(remainders);

function power(num10, num9) {
    var num11 = num10 ** num9;
    return num11;
}
var powers = power(10, 5);
console.log(powers);

// Global Function
var title= "Broadway Infosys Nepal";
function f1(){
    console.log(title);
    return title;
}

function f2(){
    var address= "kathmandu Nepal";
    console.log(title);
    console.log(address);
    return address, title;
}

function f3(){
    var email = "info@broadwayinfosys.com";
    console.log(email);
    return f4();
    function f4(){
        var tel = "321325645";
        console.log(title); // cant acess
        console.log(address); // cant access
        console.log(email);
        console.log(tel);
        return title, address, email, tel;
    }
    f4();
}
f1();
f2();
f3();
// f4();
 */




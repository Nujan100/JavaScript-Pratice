function addition() {
    Firstnumber = document.getElementById('FirstNumber').value;
    Secondnumber = document.getElementById('SecondNumber').value;
    var sum = parseInt(Firstnumber) + parseInt(Secondnumber);
    document.getElementById("sum").innerHTML = sum;
    alert(sum);
}

function subtraction() {
    var Firstnumber = document.getElementById('FirstNumber').value;
    var Secondnumber = document.getElementById('SecondNumber').value;
    var sub = parseInt(Firstnumber) - parseInt(Secondnumber);
    document.getElementById("subtraction").innerHTML = sub;
    // document.write(sub);
    alert(sub);
}

function divide() {
    var Firstnumber = document.getElementById('FirstNumber').value;
    var Secondnumber = document.getElementById('SecondNumber').value;
    var divide = parseInt(Firstnumber) / parseInt(Secondnumber);
    document.getElementById("divide").innerHTML = divide;
    // document.write(sub);
    alert(divide);
}

function multiply() {
    var Firstnumber = document.getElementById('FirstNumber').value;
    var Secondnumber = document.getElementById('SecondNumber').value;
    var mul = parseInt(Firstnumber) * parseInt(Secondnumber);
    document.getElementById("multiply").innerHTML = mul;
    alert(mul);
}

function modulus() {
    var Firstnumber = document.getElementById('FirstNumber').value;
    var Secondnumber = document.getElementById('SecondNumber').value;
    var mod = parseInt(Firstnumber) % parseInt(Secondnumber);
    document.getElementById("modulus").innerHTML = mod;
    alert(mod);
}

function power() {
    var Firstnumber = document.getElementById('FirstNumber').value;
    var Secondnumber = document.getElementById('SecondNumber').value;
    var pow = Math.pow(Firstnumber, Secondnumber);
    document.getElementById("power").innerHTML = pow;
    alert(pow);
} 

function clear(){
    myset.clear();
}


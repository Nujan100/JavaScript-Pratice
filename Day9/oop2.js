var Person = function (pid = 0, name = "", address = "",) {
    this.pid = pid;
    this.fname = name;
    this.address = address;
}

var p2 = Object.create(Person);
p2.pid = 1;
p2.fname = "John";
p2.address = "USA";

var p3 = Object.create(Person);
console.log(p2 instanceof Person);
console.log(p3 instanceof Person);
console.log(p2.pid);
console.log(p2.fname);
console.log(p2.address);


var CalculatorV2 = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = 0;

    Object.defineProperties(this, {
        "firstNo": {
            get: function () {
                return this.num1;
            },
            set: function (value) {
                this.num1 = value;
            }
        },
        "secondNo": {
            get: function () {
                return this.num2;
            },
            set: function (value) {
                this.num2 = value;
            }
        },
        "thirdNo": {
            get: function () {
                return this.num3;
            },
        },
    });
}
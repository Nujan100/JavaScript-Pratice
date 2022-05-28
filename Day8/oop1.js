var Person = function( pid=0, name="", address="",){
    this.pid = pid;
    this.name = name;
    this.address = address;
}


var Calculator = function (num1, num2){
    this.num1 = num1;
    this.num2 = num2;
    this.num3 =0;
    this.opr=null;
    this.calculate = function(opr){
        if(opr=='+'){
            this.num3 = this.num1 + this.num2;
        }
        else if(opr=='-'){
            this.num3 = this.num1 - this.num2;
        }
        else if(opr=='*'){
            this.num3 = this.num1 * this.num2;
        }
        else if(opr=='/'){
            this.num3 = this.num1 / this.num2;
        }
        else if (opr=='%'){
            this.num3 = this.num1 % this.num2;
        }
        else if(opr=='^'){
            this.num3 = Math.pow(this.num1, this.num2);
        }
        else{
            this.num3 = "NA";
        }
    }
}

var CalculatorV2 = function (num1, num2){
    this.num1 = num1;
    this.num2 = num2;
    this.num3 =0;
    this.opr=null;
    this.setNum1 = function(num1){
        this.num1 = num1;
    }
    this.setNum2 = function(num2){
        this.num2 = num2;
    }
    this.calculate = function(opr){
        if(opr=='+'){
            this.num3 = this.num1 + this.num2;
        }
        else if(opr=='-'){
            this.num3 = this.num1 - this.num2;
        }
        else if(opr=='*'){
            this.num3 = this.num1 * this.num2;
        }
        else if(opr=='/'){
            this.num3 = this.num1 / this.num2;
        }
        else if (opr=='%'){
            this.num3 = this.num1 % this.num2;
        }
        else if(opr=='^'){
            this.num3 = Math.pow(this.num1, this.num2);
        }
        else{
            this.num3 = "NA";
        }
    }
    this.strings1 = function(){
        var str1 = "<h2>Num3 :" + this.num3+"</h2>";
        // str1 = str1 + "<h2>Num2 :" + this.num3 + "</h2>";
        return(str1);
    }
}
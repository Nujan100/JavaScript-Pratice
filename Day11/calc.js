// how to use existing class 
class calc{
    mycalculator = null;
    // constructor
    constructor(mycalculator=null){
        this.mycalculator=mycalculator;
    }
    // setter  
    setMyCalculator(mycalculator){
        this.mycalculator=mycalculator;
    }
    // getter
    getMyCalculator(){
        return this.mycalculator;
    }
    gettotalSum(){
        return this.sum();
    }
    // processing function method
    sum(){
        alert(this.mycalculator.sum());
        this.mycalculator.thirdNum=this.mycalculator.getFirstNum()+this.mycalculator.getSecondNum();
    }
    sub(){
        alert(this.mycalculator.sub());
        this.mycalculator.thirdNum=this.mycalculator.getFirstNum()-this.mycalculator.getSecondNum();
    }
    mul(){
        alert(this.mycalculator.mul());
        this.mycalculator.thirdNum=this.mycalculator.getFirstNum()*this.mycalculator.getSecondNum();
    }
    div(){
        alert(this.mycalculator.div());
        this.mycalculator.thirdNum=this.mycalculator.getFirstNum()/this.mycalculator.getSecondNum();
    }
    // toString
    toString(){
        return `firstNum: ${this.mycalculator.getFirstNum()}, secondNum: ${this.mycalculator.getSecondNum()}, thirdNum: ${this.mycalculator.getThirdNum()}`;
    }
}

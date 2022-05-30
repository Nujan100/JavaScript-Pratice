class calculator{
  firstNum=null;
  secondNum=null;
  resultNum=null;
  constructor(firstNum, secondNum){
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.resultNum = 0;
  }
  setfirstNum (firstNum){
    this.firstNum = firstNum;
  }
  
  setsecondNum (secondNum){
    this.secondNum = secondNum;
  }
  getfirstNum(){
    return this.firstNum;
  }
  getsecondNum(){
    return this.secondNum;
  }
  getresultNum(){
    return this.resultNum;
  }
}

class calc{
  myCalculator = null;
  constructor(myCalculator){
    this.myCalculator = myCalculator;
  }
  setmyCalculator(myCalculator){
    this.myCalculator = myCalculator;
  }
  getmycalculator(){
    return this.myCalculator;
  }
  sum(){
    this.myCalculator.resultNum = this.myCalculator.getfirstNum()+this.myCalculator.getsecondNum();
  } 
  toString(){
    return(this.firstNum+","+this.secondNum+","+this.result);
}
}
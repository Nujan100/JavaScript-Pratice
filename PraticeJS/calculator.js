class calculator{
    //declaring instance variable 
   firstNum=null;//professional term we should declare as   num1 or xyz its not called professional 
   secondNum=null;
   result=null;
   //declaring constructor 
   constructor(firstNum,secondNum){
       this.firstNum=firstNum;
       this.secondNum=secondNum;
       this.result=0;
   }

   //setter,getter and toString
   setfirstNum(firstNum){
       this.firstNum=firstNum;
   }
   setsecondNum(secondNum){
    this.secondNum=secondNum;
}
getfirstNum(){
   return this.firstNum;
}
getsecondNum(){
   return this.secondNum;
}
getresult(){
  return this.result;
}

toString(){
    return(this.firstNum+","+this.secondNum+","+this.result);
}
};


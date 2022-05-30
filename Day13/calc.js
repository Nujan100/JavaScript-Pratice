//calculator.js is only data class for this function 
//how to use existing class 

class calc{
   mycalculator=null; //calculator type of mycalculator 
   //constructor 
   constructor(mycalculator=null){
       this.mycalculator=mycalculator;

   }
   //setter 
   setmycalculator(mycalculator){
       this.mycalculator=mycalculator;
   }

   //getter 
   getmycalculator(){
       return this.mycalculator;
   }
   //processing functions 
   sum(){
      this.mycalculator.result = this.mycalculator.getfirstNum()+this.mycalculator.getsecondNum();
   }

}
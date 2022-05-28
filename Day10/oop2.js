class Person{
    // instance variables
    pid;
    fullName;
    // constructor
    constructor(pid=0, fullName="Vannu"){
        this.pid = pid;
        this.fullName = fullName;
    }
    // setter and getters
    setPID(pid){
        this.pid = pid;
    }
    setFullName(fullName){
        this.fullName = fullName;
    }
    getPID(){
        return this.pid;
    }
    getFullName(){
        return this.fullName;
    }
    toString(){
        return super.pid + "," + super.fullName+ "," + this.address,+ "," + this.phone;
    }
}

// Inheritance
class NewPerson extends Person{
    // can access th resouces of parent class
    address;
    phone;
    constructor(pid=0, fullName="Hello", address="Nai", phone="Na"){
        super(pid, fullName);
        this.pid = pid;
        this.address = address;
        this.phone = phone;
    }
}
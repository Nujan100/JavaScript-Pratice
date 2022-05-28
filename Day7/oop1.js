person = function(pid, name, address) {
    this.pid=pid; //instance variable
    this.name=name;
    this.address=address;
}

// one function has many form - polyfermism like
// person = function(pid="", name="", address="") { //!here
//     this.pid=pid; //instance variable
//     this.name=name;
//     this.address=address;
// }

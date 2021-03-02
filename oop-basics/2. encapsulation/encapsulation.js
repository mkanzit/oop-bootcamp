// JavaScript ES5 Class
function Human(firstname = "", lastname = "") {
  this.firstname = firstname
  this.lastname = lastname
}

Human.prototype.sayHello = function sayHello() {
  return "Hello, M. " + this.firstname + " " + this.lastname
}


// JavaScript ES6 Class
class Human {
  constructor(firstname = "", lastname = "") {
    // Object Data Storage
    this.firstname = firstname
    this.lastname = lastname
  }

  // Method manipulating stored data
  sayHello() {
    return "Hello, M. " + this.firstname + " " + this.lastname
  }
}


// JavaScript ES5 Class
function Human(firstname = "", lastname = "") {
  this.firstname = firstname
  this.lastname = lastname
}


// JavaScript ES6 Class
class Human {
  constructor(firstname = "", lastname = "") {
    this.firstname = firstname
    this.lastname = lastname
  }
}


// Object / Instance
const human = new Human("John", "Doe")

// ES5 Class inheritence
function Human(firstname = "", lastname = "") {
  this.firstname = firstname
  this.lastname = lastname
}

Human.prototype.sayHello = function sayHello() {
  return "Hello, M. " + this.firstname + " " + this.lastname
}

function Professor(firstname = "", lastname = "", occupation ="") {
  Human.call(this, firstname, lastname)
	this.occupation = occupation
}

Professor.prototype = Object.create(Human.prototype)
Professor.prototype.constructor = Professor




// ES6 Class inheritence
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

class Professor extends Human {
  constructor(firstname = "", lastname = "", occupation ="") {
    super(firstname, lastname)
    this.occupation = occupation
  }
}

// Instantiate the Professor class
const professor = new Professor("John", "Doe", "JavaScript")
console.log(professor.sayHello()) // Hello, M. John Doe

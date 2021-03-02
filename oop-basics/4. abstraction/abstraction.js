// Abstracted class __ ES5 Syntax
function Human(firstname = "", lastname = "") {
	if (this.constructor === Human) {
		throw new Error("Can't instantiate abstract Human class!")
	}

	if (this.sayHello === undefined) {
		throw new TypeError('Classes extending the human abstract class');
	}
}

function Professor(firstname = "", lastname = "") {
	Human.apply(this, arguments)

  this.firstname = firstname
	this.lastname = lastname
}

Professor.prototype = Object.create(Human.prototype)
Professor.prototype.constructor = Professor

Professor.prototype.sayHello = function sayHello() {
	return "Hello, M. " + this.firstname + " " + this.lastname
}

try {
	const professor = new Professor("John", "Doe")

	console.dir(professor)
	console.log(professor.sayHello()) // Hello, M. John Doe
} catch (error) {
	console.log(error)
}


// Abstracted class __ ES6 Syntax
class Human {
  constructor() {
    if (this.constructor === Human) {
      throw new Error("Can't instantiate abstract Human class!")
    }

    if (this.sayHello === undefined) {
      throw new TypeError('Classes extending the human abstract class');
    }
  }
}

class Professor extends Human {
  constructor() {
    super()
  }

  sayHello() {
    return "Hello 👋!"
  }
}



const p = new Professor()
console.log(p.sayHello()) // "Hello 👋!"

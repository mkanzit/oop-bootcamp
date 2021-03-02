// ES5 Syntax
function Human() {}
Human.prototype.sayhi = function sayhi() { console.log("Hi, I'm Human!") }

function Professor() {}
Professor.prototype = Object.create(Human.prototype)
Professor.prototype.constructor = Professor

Professor.prototype.sayhi = function sayhi() { console.log("Hi, I'm a Professor") }

const p = new Professor()
p.sayhi() // Hi, I'm a Professor


// ES6 Syntax
class Human {
	sayhi() { console.log("Hi, I'm Human!") }
}

class Professor extends Human {
	sayhi() { console.log("Hi, I'm a Professor!") }
}

const p = new Professor
p.sayhi() // Hi, I'm a Professor

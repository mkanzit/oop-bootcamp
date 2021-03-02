// Static methods & properties : accessed only from the instance itself
// ES6
class Person {
  static greeting() { console.log("Hello!") }
}

const p = new Person()

// ES5
function Person() {}
Person.greeting = function greeting() {
	console.log("Hello!")
}

const p = new Person

console.log(p.greeting) // undefined
Person.greeting() // "Hello!"



// Private methods & properties : accessed only by the instance itself
// ES6: This is a stage 3 proposal & it's available only with a transpiler like Babel7 or TypeScript
class Person {
  #firstname
  greeting() {
    console.log("Hi, I'm", this.#firstname)
  }
}

// ES5: This implemented via closures
function Person() {
  // Private property
  let firstname = "John"

  this.greeting = function greeting() {
    console.log("Hi, I'm", firstname)
  }
}

const p = new Person()
console.log(p.firstname) // undefined

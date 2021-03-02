class Person {
	#name = "Ashraf"
	#greeting() {
		console.log(`
			Hello, ${this.#name}
			How're you doing?
		`) // String literal
	}

	sayHello() {
		this.#greeting()
	}
}

const globalVar = 4
const globalFunction = function globalFunction() {

}

// Closures
function Person2() {
	const name = "Ashraf"

	function greeting() {
		const msg = "Hello"

		console.log(`
			${msg}, ${name}
			How're you doing?
			I'm Person2 by the way!
		`) // String literal
	}

	this.sayHello = function sayHello() {
		greeting()
	}
}

const p = new Person()
const p2 = new Person2()

p.sayHello()
p2.sayHello()

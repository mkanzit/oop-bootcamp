class Person {
	static greeting() {
		console.log("Hello!")
	}
}

function Person2() { }
Person2.greeting = function greeting() {
	console.log("Hello from Person2!")
}

const p = new Person()
const p2 = new Person2()

console.log(p.greeting)
console.log(Person.greeting)
console.log("------------------------")
console.log(p2.greeting)
console.log(Person2.greeting)


// Static property example
Math.PI

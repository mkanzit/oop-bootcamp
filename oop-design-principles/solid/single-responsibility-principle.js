/************************************

According to this principle, a class should have only a single responsibility or a single job or a single purpose. We should strictly avoid using generalized classes where the entire implementation is given in the same class. It also states that the responsibility should be entirely encapsulated by the class, module, or function.

The key benefit of this principle is that it reduces coupling between the individual component of the software and Code.

************************************/

class Square {
	constructor(length = 0) {
		this.length = length
	}
}

class Circle {
	constructor(radius = 0) {
		this.radius = radius
	}
}

class AreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes
	}

	sum() {
		let sum = 0;
		for(let s of this.shapes) {
			if (s instanceof Square) {
        sum += Math.pow(s.length, 2)
      }

      if (s instanceof Circle) {
        sum += Math.PI * Math.pow(s.radius, 2)
      }
		}
		return sum
	}
}

/***************************

Consider a scenario where the output should be converted to another format like JSON. All of the logic would be handled by the AreaCalculator class. This would violate the single-responsibility principle. It should not care whether the user wants JSON or HTML.

*****************************/

// Create a separate class to manage output
class SumCalculatorOutputter {
  constructor(calculator) {
    this.calculator = calculator
  }

  json() {
    return json_encode({
      sum: this.calculator.sum()
    });
  }

  html() {
   return ['Sum of the areas of provided shapes: ', this.calculator.sum()].join('')
  }
}

const shapes = [
  new Circle(2),
  new Square(5),
  new Square(6),
];

const areas = new AreaCalculator(shapes);
const output = new SumCalculatorOutputter(areas);

console.log(output.json()) // { sum: 130.34 }
console.log(output.html()) // "Sum of the areas of provided shapes: 130.34"

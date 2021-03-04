/************************************

According to this principle, the software entities like classes, modules, functions, etc. should be open for extension and the classes should be closed for modification. This means that we should be able to extend a class behavior, without modifying it.

The key benefit of this design principle is that already tried and tested code is not touched which means they won’t break.

Consider a scenario where the user would like the sum of additional shapes like triangles, pentagons, hexagons, etc. You would have to constantly edit this file and add more if/else blocks. That would violate the open-closed principle.

A way you can make this sum method better is to remove the logic to calculate the area of each shape out of the AreaCalculator class method and attach it to each shape’s class.

************************************/

class Square {
	constructor(length = 0) {
		this.length = length
	}

  // area method for square
  area() {
    return Math.pow(this.length, 2)
  }
}

class Circle {
	constructor(radius = 0) {
		this.radius = radius
	}

  // area method for circle
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

class AreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes
	}

	sum() {
		let sum = 0;
		for(let s of this.shapes) {
      // Call area method on each shape
			sum += s.area()
		}
		return sum
	}
}

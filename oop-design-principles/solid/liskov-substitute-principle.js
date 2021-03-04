
/***************************

According to this principle, the Derived or child classes must be substitutable for their base or parent classes. This principle ensures that any class that is the child of a parent class should be usable in place of its parent without any unexpected behavior.

*****************************/

// Consider a new VolumeCalculator class that extends the AreaCalculator class
class VolumeCalculator extends AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
		return sumData
	}
}

areas = new AreaCalculator(shapes);
volumes = new VolumeCalculator(solidShapes);

output = new SumCalculatorOutputter(areas);
output2 = new SumCalculatorOutputter(volumes);

// Will work with volumes as if they were areas. That satisfies the Liskov substitution principle.
output2.html()

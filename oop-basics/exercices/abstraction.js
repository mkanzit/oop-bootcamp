/*******************************************
	Solutions: Abstraction
*******************************************/

// 1. Créez une classe Shape avec des sous-classes Square & Circle, et faites abstraction de la méthode "type" pour renvoyer le type de chaque forme
class Shape {
  type() {
    if (this instanceof Circle) {
      return "Circle";
    }

    if (this instanceof Square) {
      return "Square";
    }
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
}

class Circle extends Shape {
  constructor(rayon) {
    super();
    this.rayon = rayon;
  }
}

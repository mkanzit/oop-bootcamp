/*******************************************
	Solutions: Encapsulation
*******************************************/

// 1. Créez les classes suivantes: Square & Circle avec:
//		- Square: a une propriété length et la méthode de type qui retournent le type d'objet
//		- Circle: a une propriété de rayon et une méthode de type qui renvoient le type d'objet
class Square {
  constructor(length) {
    this.length = length;
  }

  type() {
    console.log("Square");
  }
}

class Circle {
  constructor(rayon) {
    this.rayon = rayon;
  }

  type() {
    console.log("Circle");
  }
}

// 2. Créez la classe AreaCalculator avec une méthode de propriété "shapes[]" et "area" pour calculer la somme des surfaces de toutes les formes
class AreaClaculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  area() {
    let sum = 0;

    for (let s of this.shapes) {
      if (s instanceof Circle) {
        sum += Math.PI * Math.pow(s.rayon, 2);
      }

      if (s instanceof Square) {
        sum += Math.pow(s.length, 2);
      }
    }

    return sum;
  }
}

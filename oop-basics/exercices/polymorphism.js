/*******************************************
	Solutions: Polymorphism
*******************************************/

// 1. Utilisez les mêmes classes du premier exercice d'héritage et surchargez la méthode "talk" dans les classes Dog, Cat
// 1. Polymorphism
class Animal {
  constructor(name = "", specie = "", food = "", color = "") {
    this.name = name;
    this.specie = specie;
    this.food = food;
    this.color = color;
  }

  talk() {
    console.log("Talking ...");
  }
  walk() {
    console.log("Walking ...");
  }
}

class Dog extends Animal {
  constructor(owner = "", ...args) {
    // Opérateur rest
    super(...args); // Opérateur spread
    this.owner = owner;
  }

  bark() {
    console.log("Woof!");
  }
  talk() {
    console.log("Hey, I'm a Dog!");
  }
}

class Cat extends Animal {
  constructor(...args) {
    super(...args);
  }

  meow() {
    console.log("Meoooow!");
  }
  talk() {
    console.log("Shut, I'm a Cat!");
  }
}

// 2. Créez une classe de calculatrice d'aire qui prend un tableau de formes (Circle, Square) et appelez la méthode area sur chacune pour calculer la surface, puis renvoyez la somme de toutes les surfaces une fois terminé.
class AreaClaculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  area() {
    let sum = 0;

    for (let s of this.shapes) {
      // s.constructor === Circle
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

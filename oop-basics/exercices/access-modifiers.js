/*******************************************
	Solutions: Access modifiers
*******************************************/

// 1. Écrivez une classe Person avec des propriétés et des méthodes publiques, privées et statiques et testez l'accès à chacune d'elles
class Person {
  #privateProperty;
  static describe() {
    console.log("Static method");
  }

  constructor() {
    this.publicProperty = "public";
  }
}

console.log(Person.privateProperty); // undefined
Person.describe(); // "Static method"
console.log(new Person().publicProperty); // "public"

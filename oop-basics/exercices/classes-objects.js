/*******************************************
	Solutions: Classes & Objects
*******************************************/

// 1. Ecrire un programme JavaScript pour lister les propriétés de l'objet suivant
const obj = { name: "John", age: 16 };

// Solution
for (let prop in obj) {
  console.log(prop);
}

// 2. Ecrire un programme JavaScript pour supprimer la propriété "age" de l'objet suivant
const obj = { name: "John", age: 21 };

// Solution
console.log(obj);
delete obj.age;
console.log(obj);

// 3.Ecrire une fonction JavaScript pour vérifier si un objet contient la propriété "name"
const human = { name: "John" };

// Méthode 1: obj.hasOwnProperty("name") (préférée)
// Méthode 2: obj.name !== undefined
// Méthode 3: !!obj.name
const exist = obj.hasOwnProperty("name");
console.log(obj, exist);

// 4. Ecrire une fonction JavaScript pour imprimer toutes les méthodes d'un objet
const obj = {
  name: "John",
  age: 33,
  sayHello: () => console.log("Hello, World!"),
};

// Solution
try {
  for (let p in obj) {
    if (typeof obj[p] === "function" && obj.hasOwnProperty(p)) {
      console.log(obj[p]);
    }
  }
} catch (error) {
  console.log(error);
}

// 5.Créez et instanciez la classe Human avec les deux variantes
// de syntaxe ES5, ES6

// Solution ES6
class Human {
  constructor(nom = "", age = 0, poid = 0) {
    this.nom = nom;
    this.age = age;
    this.poid = poid;
  }

  affichage() {
    console.log(
      `persone nom = ${this.nom} age = ${this.age} poid = ${this.poid}`
    );
  }
}

var obj = new Human("soufian", 34, 65);
obj.affichage();

// Solution ES5
function Human(nom = "", age = 0, poid = 0) {
  this.nom = nom;
  this.age = age;
  this.poid = poid;
}

Human.prototype.affichage = function () {
  console.log(
    `persone nom = ${this.nom} age = ${this.age} poid = ${this.poid}`
  );
};

var obj = new Human("soufian", 34, 65);
obj.affichage();

/***********************************************************************/

// 1. Ecrire un programme JavaScript pour lister les propriétés de l'objet suivant
const obj = { name: "John", age: 16 };

for (let p in obj) {
  console.log(p);
}

// 2. Ecrire un programme JavaScript pour supprimer la propriété "age" de l'objet suivant
const obj = { name: "John", age: 16 };
delete obj.age;

// 3. Ecrire une fonction JavaScript pour vérifier si un objet contient la propriété "name"
const obj = { name: "John", age: 16 };
console.log(obj.hasOwnProperty("name"));

// 4. Ecrire une fonction JavaScript pour imprimer toutes les méthodes d'un objet
const obj = {
  name: "John",
  age: 16,
  sayHello: () => {
    console.log("Hello");
  },
};

for (let p of obj) {
  if (typeof p === "function") {
    console.log(p);
  }
}

// 5. Créez et instanciez la classe Human avec les deux variantes de syntaxe ES5, ES6
class HumanES6 {
  constructor(name = "", age = "") {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hello, World!");
  }
}

function HumanES5(name = "", age = "") {
  this.name = name;
  this.age = age;
}

HumanES5.prototype.greeting = function greeting() {
  console.log("Hello, World!");
};

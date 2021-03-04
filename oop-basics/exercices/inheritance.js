/*******************************************
	Solutions: Héritage
*******************************************/

// 1. Créez la classe Animal avec 2 sous-classes Dog & Cat où:
// 	- La classe animale a les propriétés "name", "specie", "food", "color", ainsi que les méthodes "talk", "walk"
//	- Cat & Dog a respectivement les méthodes "meow" et "bark"
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
    // rest operator
    super(...args); // spread operator
    this.owner = owner;
  }

  bark() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  constructor(...args) {
    super(...args);
  }

  meow() {
    console.log("Meoooow!");
  }
}

// 2. Utilisez la composition pour recréer l'exemple précédent
const animalFactory = (name = "", specie = "", food = "", color = "") => {
  // name = "", specie = "", food = "", color = ""
  const self = {
    name: name,
    specie: specie,
    food: food,
    color: color,
    talk: () => console.log("Talking ..."),
    walk: () => console.log("Walking ..."),
  };

  return self;
};

const canBark = () => ({
  bark: () => console.log("Woof!"),
  guard: () => console.log("Guard"),
});

const canMeow = () => ({
  meow: () => console.log("Meoooow!"),
});

const animalDog = animalFactory("Max", "Bulldog", "Crookies", "Blanc");
const animalCat = animalFactory("Lucy", "Egyptien", "Poisson", "Gris");

const mydog = Object.assign({ owner: "John" }, animalDog, canBark());
const mycat = Object.assign({}, animalCat, canMeow());

// 3. Ecrire deux mixins FoodMixin & SoundMixing pour étendre la classe animale
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

const FoodMixin = (superclass) =>
  class Food extends superclass {
    eat() {
      console.log("Eating ...");
    }
    digest() {}
  };

const DrinkMixin = (superclass) =>
  class Drink extends superclass {
    drink() {
      console.log("Eating ...");
    }
    spit() {}
  };

const FAnimal = new DrinkMixin(FoodMixin(Animal));
const fanimal = new FAnimal();

// 4. Recréez les exemples précédents avec la syntaxe ES5
const animalFactory = (name = "", specie = "", food = "", color = "") => {
  const self = {
    name: name,
    specie: specie,
    food: food,
    color: color,
    talk: function talk() {
      console.log("Talking ...");
    },
    walk: function walk() {
      console.log("Walking ...");
    },
  };

  return self;
};

const animal = animalFactory("Max", "Bulldog", "Crookies", "Blanc");

const canEat = () => ({
  eat: () => console.log("Eating ..."),
});

const canDrink = () => ({
  drink: () => console.log("Drinking ..."),
});

const dog = Object.assign({}, animal, canEat(), canDrink());

/*******************************************

Object Composition: A common composition pattern in JavaScript is using object composition. It combines the power of objects and functional programming.

Imagine an animal has the ability to eat and fly. In hierarchy, that could mean to have an Animal and FlyingAnimal. And if we add more and more animals, that hierarchy could become a bit messy, since abilities are shared between animals.

With composition, you could have factories that create an object:

*******************************************/

const human = name => {
  const self = {
    name
  };

  return self;
}

const jack = human("jack");


/*******************************************

Then, you can define behaviors as functions receiving the self. That makes them easily composable since they’re just functions. Then we’ll use any object merging utility, such as Object.assign or the spread operator ({...a, ...b}) in the factory function in order to create the final object:

*******************************************/

// We have some behaviors
const canSayHi = self => ({
  sayHi: () => console.log(`Hi! I'm ${self.name}`)
});

const canEat = () => ({
  eat: food => console.log(`Eating ${food}...`)
});

const canPoop = () => ({
  poop: () => console.log('Going to 💩...')
});


// Combined previous behaviours
const socialBehaviors = self => Object.assign({}, canSayHi(self), canEat(), canPoop());


const human = name => {
  const self = {
    name
  };

  const humanBehaviors = self => ({
    cry: () => console.log("Waaaaaaa!")
  });

  return Object.assign(self, socialBehaviors(self), humanBehaviors(self));
};


const jack = human("jack");
jack.sayHi(); // Hi! I'm jack
jack.eat("Banana"); // Eating Banana...
jack.cry(); // Waaaaaaa!

/*******************************************

This kind of composition has the benefits of easy refactoring and a simple mental model for structuring since you don’t have the restrictions of a hierarchy.

*******************************************/


/*******************************************

Composition with JavaScript Classes: classes are functions and functions are objects, so we can compose them as well.

We can use a mixin technique in order to define pieces of behaviors, consisting of a factory function that takes a superclass as a parameter and returns a subclass:

*******************************************/

// Create a mixin
const FoodMixin = superclass => class extends superclass {
  eat(food) {
    console.log(`Eating ${food}`);
  }

  poop() {
    console.log("Going to 💩");
  }
};

// Then we can use it to reproduce the Child example by enhancing
// a Human class with the FoodMixin:
class Human {
  constructor(name) {
    this.name = name
  }
}

class Child extends FoodMixin(Human) {
  constructor(...args) {
    super(...args)
  }

  cry() {
    console.log("Waaaaaaa!")
  }

  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}

const jack = new Child("jack");
jack.haveLunch("cookies");



// Combining Mixins: Since mixins are just factory functions, we can use several of them
const MixinA = superclass => class extends superclass {};
const MixinB = superclass => class extends superclass {};

class Human {}
class Child extends MixinB(MixinA(Human)) {}


// The cool thing is that since they’re just unary pure functions
// (they take only one argument), we can use a compose functional
// utility to avoid that, such as lodash’s one
import compose from "lodash/fp/compose"

const MixinA = superclass => class extends superclass {};
const MixinB = superclass => class extends superclass {};
const MixinC = superclass => class extends superclass {};

class Human {}

const Behaviors = compose(MixinA, MixinB, MixinC)(Human)

class Child extends Behaviors {}


// Final example
const EatMixin = superclass => class extends superclass {
  eat(food) {
    console.log(`Eating ${food}`);
  }
};

const PoopMixin = superclass => class extends superclass {
  poop() {
    console.log("Going to 💩");
  }
};

const FlyMixin = superclass => class extends superclass {
  fly() {
    console.log("Flying for real!");
  }
};


class Human {
  constructor(name) {
    this.name = name
  }
}

const SuperPoweredHuman = compose(EatMixin, PoopMixin, FlyMixin)(Human);


class Child extends SuperPoweredHuman {
  yell() {
    console.log("Hey!")
  }

  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}

const jack = new Child("jack");
jack.yell(); // Hey!
jack.haveLunch("strawberries"); // Eating strawberries. Going to 💩

// Types de base
// Objet: manipulation des objet
// Functions: manipulation

// Scalar types
const string = "my string";
const number = 123; // or 123.345
const boolean = false; // or true
const n = null;
const u = undefined;

// Complex types
const array = [1, 1, "2", {}, function func() {}];
const objet = {
  firstname: "John",
  age: 10,
  talk: function talk() {},
};

// Functions
function funcDeclaration() {}
const funcExpression = function funcExpression() {};
const arrowFunction = () => {};
const funcConstructor = new Function("function funcConstructor() {}");
const anonymousFunc = function () {};
const namedFunction = function namedFunction() {};
const ConstructorFunction = () => {};
const normalFunction = () => {};
(function ifee(id, string) {
  // IIFE ( Immediately Invoked Function Expression )
  // declaration => expression
})(123, "name");

// Set & Map
const myset = new Set();
const myweakset = new WeakSet();
const mymap = new Map();
const myweakmap = new WeakMap();

// Falsy values in JavaScript
false;
0;
("");
null;
undefined;

// Truthy values
{
}
[];
1;
("boolean");
true;

// Passage par valeur
let age = 10;
let age2 = age;

// Passage par reference
let user = { id: 123 };
let userRef = user;

// Closure ( Memoriser le scope d'objet parent )
const human = (self) => {
  const d = "diesel";
  const obj = {
    name: "Ashraf",
    info: () => {
      // Memoriser "self"
      console.log(self);
    },
  };

  return obj;
};

const res = human({ age: "33" });
res.info();

// Closure: example 2
const add = function add(num) {
  var id = 0;
  // context: window, args, id
  return function addToNum(n) {
    // Garbage Collector: GC
    // capture du context: window, args, id
    return num + n;
  };
};

// Function arguments
function func() {
  // Objet des argumetns de la fonction
  console.log(arguments);

  // Convertir l'objet en un tableau
  const args = Array.prototype.slice.call(arguments);

  // Manipuler le tableau des arguments
  console.log(args.slice(1, 2));
}

function api(url, ...config /*args*/) {
  // Convertir l'objet des argument en un tableau avec "rest" operator
  console.log(url);
  console.log(config);
  return; // return value
}

// Valeur par défaut des paramètres
function func(id = 1) {
  // valeur fournis => id: valeur saisie
  // si non, prend la valeur par défaut
}

// Passage des paramètres au fonction
const connected = false;
const isConnected = () => true;

func(1, "cc", {}, [], function () {}, connected, isConnected());

// Valeur de retour d'une fonction
function func() {
  // code
  return "cc";

  // Ce code est jamais executer
  const p = Math.PI;
}

// Hoisting: accès à la valeur d'un variable même s'il est déclarer après
// dans le code
console.log(b); // 30
var b = 30;

// DOM: Arbre des composants HTML ( Document Object Model )
// BOM: Arbre des API exposé par le navigateur ( Browser Object Model )
// API: Application Programming Interface

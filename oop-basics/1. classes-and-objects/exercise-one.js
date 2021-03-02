// Créer une classe mére Animal
// => méthode: manger() => "Je mange!"
// => data: type
//
// Créer une classe fils Chien
// => méthode: bark() => "Woff!"
class Animal {
	constructor(type) {
		this.type = type;
	}

	manger(){
		console.log("manger")
	}
}


class Chien extends Animal {
	constructor(){
		super()
	}

	bark(){ console.log("woof") }
}


var chien = new Chien;
chien.bark();

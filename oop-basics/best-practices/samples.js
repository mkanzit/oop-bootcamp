/*******************************************
	Pièges & Bonnes pratiques
*******************************************/

// Évitez les déclarations globales
var g = "global variable";

function AreaCalculator() {
  // L'accès à la variable globale génère des comportements non déterministes qui mettent en danger le fonctionnement de l'application
  g = "";
}

// Évitez les longs corps fonctionnels
// Essayez de créer plusieurs petites fonctions à la place
const obj = {
  name: "Ashraf",
  display: () => {
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
  },
};

// Ne mettez jamais de règles métier dans le constructeur
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.db = dbConnection;

    // Danger
    const area = fetch("");
    area.manu;
  }
}

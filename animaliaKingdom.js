// Class representing a Animalia Classification
class Animalia {
    constructor(name) {
      this.name = name;
      this.classes = [];
    }
  
    addClass(animaliaKingdomClass) {
      this.classes.push(animaliaKingdomClass);
    }
  }
  
  // Create instances for classification
  const AnimaliaWithbackbone = new Animalia("Aves");
  const AnimaliaWithoutbackbone = new Animalia("Anthropoda");
  const AnimaliaColdblooded = new Animalia("Anthropoda, Amphibia, Fish, Reptiles");
  const AnimaliaWarmblooded = new Animalia("Aves, Mammals");

  
  // Build the classification hierarchy
  AnimaliaWithbackbone.addClass(Animalia);
  AnimaliaWithoutbackbone.addClass(Animalia);
  AnimaliaColdblooded.addClass(Animalia);
  AnimaliaWarmblooded.addClass(Animalia);
  
  
  // Display information about the Animalia Kingdom Classification
  console.log("Animalia Kingdoms With Backbone")
  console.log(AnimaliaWithbackbone);
  console.log("")
  console.log("Animalia Kingdoms Without Backbone")
  console.log(AnimaliaWithoutbackbone);
  console.log("")
  console.log("Animalia Kingdoms Cold Blooded")
  console.log(AnimaliaColdblooded);
  console.log("")
  console.log("Animalia Kingdoms Warm Blooded")
  console.log(AnimaliaWarmblooded);
  
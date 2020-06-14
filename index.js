const pets = [{
    name: "Max",
    type: "dog",
    bornOn: 2018
  },
  {
    name: "Angel",
    type: "cat",
    bornOn: 2015
  },
  {
    name: "Jasper",
    type: "dog",
    bornOn: 2016
  }
];

// ARROW FUNCTION(ok)//
const getAge = (pet) =>
  new Date().getFullYear() - pet.bornOn;

/*const petsWithAge = [];
for (var i = 0; i < pets.length; i++) {

  const multiply= () => { return 2 * 3 };
  const pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}
console.log(petsWithAge)*/
const petsWithAge = [];
console.log('petswithage :')
pets.forEach((pet) => {
  pet.age = getAge(pet);
  petsWithAge.push(pet);

});
console.log(petsWithAge);


/*var dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);*/
// changement boucle for avec filter//
const dogs = pets.filter((pet) => {
  return pet.type === "dog"
});
console.log(dogs);

/*var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");*/
// changement boucle for avec find//
const jasper = petsWithAge.find(pet => {
  return pet.name === "Jasper"
});
console.log("Jasper is " + jasper.age + " years old");
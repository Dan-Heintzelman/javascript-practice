//Use this file to implement Part One of your project


var animal = {};
//dot notation
animal.username = "Cowdy";
console.log(animal.username);

//bracket notation
animal["tagline"] = "Beefy tasting, not looking";
console.log(animal.tagline);

var noises = [];
animal.noises = noises;
console.log(animal.noises);

var count = 0
for(var key in animal) {
  count ++;
  if (key === "username") {
    console.log("Hi, my name is " + animal[key]);
  }else if (key === "tagline") {
    console.log("I like to say " + animal[key]);
  }
}
console.log(count)

var noiseArray = [];
noiseArray[0] = "Moo";

//add an item to the beginning and end
noiseArray.unshift("Meow");
noiseArray.push("Ribbet");

console.log(noiseArray.length);

noiseArray[2] = "quack";

// length is 3
// index is 2, just 1 less than length

//Collections

var animals = [];

animals.push(animal);

var quackers = {
  username: 'DaffyDuck',
   tagline: 'Yippeee!',
    noises: ['quack', 'honk', 'sneeze', 'growl']
};

animals.unshift(quackers);

var oinkers = {
  username: "Oinky",
  tagline: "Don't pork me over",
  noises: ["oink", "oinkee", "fart"]
};

var goaty = {
  username: "Goat-tee",
  tagline: "Game of goats ftw",
  noises: ["mahhh", "yeeeahhh", "meahahahh"]
};

animals.push(oinkers, goaty);


function AnimalMaker(name) {
  return {
    speak: function() {
      console.log("my name is ", + name);
    }
  };

};

var animalNames = ["Sheep", "Liger", "Big Bird"];
var farm = [];
animalNames.forEach(function(animal) {
  console.log(animal);
  farm.push(AnimalMaker(animal));
});

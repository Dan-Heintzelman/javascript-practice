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



// Part 2: eFarmony Functions

// var AnimalTestUser = function(username) {
//   if (arguments.length > 1) {
//     var argsArray = [];
//       for (var i = 0;i < arguments.length; i++){
//         argsArray.push(arguments[i]);
//       };
//     return {
//       username: username,
//       otherArgs: argsArray
//     };
//   } else {
//     return {
//       username: username,
//     };
//   }
// };

//Refactor

var AnimalTestUser = function(username) {
  var argLength = arguments.length;
  var argsArray = [];
  if (argLength > 1) {
      for (var i = 1;i < argLength; i++){
        argsArray.push(arguments[i]);
      }
  };
    return {
      username: username,
      otherArgs: argsArray
    };
};




var AnimalCreator = function(username, species, tagline, noises){
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
}

//Refactor (side effect is creatin a new job rather than returning an object literal on function call)

function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
}

var addFriend = function(animal, friendAnimal) {
  animal.friends.push(friendAnimal.username);
};

// Create a myfarm collection with at least 3 animal objects

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = AnimalCreator('MooveOver', 'cow', 'You can cownt on me!', ['moo', 'rawr', 'ding ding']);
var dog = AnimalCreator('Izzbizz', 'dog', 'I wove squirrels', ['roof', 'rawrawraw', 'panting']);

addFriend(dog, cow);
addFriend(cow, dog);
addFriend(sheep, dog);

var myFarm = [sheep, dog, cow]
console.log(myFarm);

// Create a function addMatchesArray


var addMatchesArray = function(farm) {
  farm.forEach(function(animal){
    animal.matches = [];
  });
};

addMatchesArray(myFarm);
console.log(myFarm);

var giveMatches = function(farm) {
  farm.forEach(function(animal){
    var friend = animal.friends[Math.floor(Math.random() * animal.friends.length)];
    animal.matches.push(friend);
  });
}

// Nested Data Structures

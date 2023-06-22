// ? 101: Biggest Word
let longestWord;
function biggestWord(phrase) {
  const eachWordArray = phrase.split(" ");
  longestWord = eachWordArray.reduce((acc, val) =>
    acc.length > val.length ? acc : val
  );
  return longestWord;
}
biggestWord("Hola que taaaaaaaaal");

// ? 114: values
let values;
function getValues(obj) {
  values = Object.values(obj);
  return values;
}
// console.log(
//   getValues({ id: 31, duration: 310, name: "long video", format: "mp4" })
// );

// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  // console.log("I'm walking");
};

var john = new Person("John");
// console.log(getValues(john));

// ? 102: califications 
//REVIEW - No debería salir siempre sobresaliente

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

let averageText;
function printAverage(classResults) {
  let values;
  values = Object.values(classResults);
  let sum = values.reduce((acc, val) => (acc += val));
  let average = sum / values.length;
  if (average === 10) {
    return averageText = "Matrícula de Honor";
  } else if (9 < average < 10) {
    console.log(9<average<10)
    return averageText = "Sobresaliente";
  } else if (7 < average < 9) {
    return averageText = "Notable";
  } else if (6 < average < 7) {
    return averageText = "Bien";
  } else if (5 < average < 6) {
   return averageText = "Suficiente";
  } else if (4 < average < 5) {
    return averageText = "Insuficiente";
  } else if (average < 4) {
    return averageText = "Muy deficiente";
  }
}
// console.log(averageText);

// console.log(printAverage(eso2o));

// ? 103 - check arguments

function f(input) {
  var result;
  input === undefined || input === null ? result = 'Unknown' : result = input
  return result;
}

// console.log(f('resultado'))

// ? 104 clone-merge
//TODO: Apartado B
function clone(source) {
  const copy = {...source};
  return copy;
}

// ? 105 deep-equal
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

// console.log(user === clonedUser); // false

function isEqual(a, b) {
  const keysA = Object.keys(a);
  let filteredKeys = [];
  keysA.forEach(key => {
    filteredKeys.push(b.hasOwnProperty(key))
  });
  return !filteredKeys.some(key => key === false)
}
// console.log(isEqual(user, clonedUser));


var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

//TODO: Apartado B
// function isDeepEqual(a, b) {
//   const valuesA = Object.values(a);
//   for (let key of valuesA) {
//     if(typeof key === 'object') {
//       console.log(key)
//       key = Object.keys(key)
//       console.log(key)
//     }
//   }
// }

// console.log(isDeepEqual(user, clonedUser));

// ? 106 - dices






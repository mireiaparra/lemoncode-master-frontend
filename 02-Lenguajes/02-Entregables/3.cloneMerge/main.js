// ? Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
  return {...source}
}

const car = {
    color: 'azul',
    marca: 'peugeot',
    año: 2015
}

console.log(clone(car))

// ? Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 
 
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return {...source, ...target}
}

console.log(merge(a, b))
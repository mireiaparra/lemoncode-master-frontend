// ? Implementa una función head (inmutable), tal que, 
// ? dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (array) => {
  [firstElement, ...otherElements] = array;
  return firstElement;
};
const myArray = ["Lunes", "Martes", "Miércoles"];
console.log(head(myArray));

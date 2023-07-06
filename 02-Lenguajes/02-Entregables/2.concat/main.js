// ? Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (array1, array2) => {
    return [...array1, ...array2]
}; 

const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c']

console.log(concat(numbers, letters))

// ? Opcional
// ? Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const multipleConcat = (...args) => {
    let newArray = []  
    return newArray.concat(...args)
  }
  
  const days = ['Lunes', 'Martes', 'Miércoles']
  
  console.log(multipleConcat(days, numbers, letters))


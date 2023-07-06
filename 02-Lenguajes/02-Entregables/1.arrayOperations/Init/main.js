// ? Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => {
    return array.slice(0, -1)
}; 

const myArray = [1, 2, 3, 4, 5]

console.log(init(myArray))
// ? Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => {
    return array.pop()
}; 

const myArray = [1, 2, 3, 4, 5]
console.log(last(myArray))
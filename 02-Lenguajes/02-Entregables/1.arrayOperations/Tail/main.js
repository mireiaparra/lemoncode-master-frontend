// ? Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (myArray) => {
    [firstElement, ...allElements] = myArray;
    return allElements
}; 

const myArray = [1, 2, 3, 4, 5, 6]
console.log(tail(myArray))
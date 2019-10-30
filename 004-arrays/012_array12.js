/*
 * Arquivo: 012_array12.js
 * Autor: Paulo Alves
 * Descrição: utilizando algumas funções para manipulação de arrays
 * Data: 30/10/2019
*/

// Array com método construtor
let valores = Array(1, 2, 3)
console.log(valores)

// Concatenando array com a função concat()
let myArray = [1, 2, 3]
let myArray2 = Array(4, 5, 6)
console.log(myArray.concat(myArray2))

// Veriifcando se array inclui um elemento de valor 3 com a função include()
let myNumbers = [10, 15, 25]
console.log(myNumbers.includes(15))

// Indicando indice de um elemento com a função indexOf()
let myArray3 = [7, 8, 9]
console.log(myArray3.indexOf(8))

// Juntando todos os elementos do array em uma única string com a função join()
let myArray4 = [45, 87, 19]
console.log(myArray4.join('-'))

// Invertendo os elementos do array com o função reverse()
let myArray5 = [10, 11, 12]
console.log(myArray5.reverse())

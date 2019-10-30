/*
 * Arquivo: 007_array7.js
 * Autor: Paulo Alves
 * Descrição: retornando em uma array o primeiro valor maior que 5 usando as funções find() e findIndex() para exibir indice 
 * Data: 30/10/2019
*/

let numeros = [2, 3, 4, 5, 6, 8, 10, 11]

console.log(numeros.find(n => n > 5))
console.log(numeros.findIndex(n => n > 5))
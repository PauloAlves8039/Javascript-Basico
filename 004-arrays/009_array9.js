/*
 * Arquivo: 009_array9.js
 * Autor: Paulo Alves
 * Descrição: ordenando elementos do array com a função sort() para verificar condições de seus elementos
 * Data: 30/10/2019
*/

let valores = [8, 2, 15, 10, 4, 6]
console.log(valores.sort((a ,b) => a > b ? 1 : -1))
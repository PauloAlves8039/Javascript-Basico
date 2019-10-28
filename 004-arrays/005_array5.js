/*
 * Arquivo: 004_array4.js
 * Autor: Paulo Alves
 * Descrição: verificando se array possui números pares usando a função every() com um callback
 * Data: 28/10/2019
*/

/*
 * Verificando se array possui todos os números pares
 * Nesse caso é feito o uso da função every() com um callback
*/
let numeros = [2, 4, 6, 8, 10, 11]

console.log(numeros.every(n => n % 2 === 0))

/*
 * Verificando se os elementos do array tem pelo ao menos um número impar
 * Nesse caso é feito o uso da função some() com um callback
*/
console.log(numeros.some(n => n % 2 !== 0))
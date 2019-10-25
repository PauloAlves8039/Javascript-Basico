/*
 * Arquivo: 011_operadoresUnarios.js
 * Autor: Paulo Alves
 * Descrição: utilizando operador unário para operação com apenas um operando
 * Data: 25/10/2019
*/

var num1 = 1
var num2 = 2

// Operador de incremento
num1++
console.log(num1)

++num1
console.log(num1)

// Operador de decremento
num2--
console.log(num2)

--num2
console.log(num2)

// Comparação de valores
console.log(++num1 === num1--)
console.log(num1 === num2)
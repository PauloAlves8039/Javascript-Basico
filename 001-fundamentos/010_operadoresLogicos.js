/*
 * Arquivo: 008_operadoresAritmeticos.js
 * Autor: Paulo Alves
 * Descrição: utilizando operadores lógicos para verificar valores boleanos
 * Data: 25/10/2019
*/

// Operador &&(AND) significa "E"
var idade = 19

if(idade >= 17 && idade <= 18){
    console.log('Ainda não pode tirar a carteira de habilitação!')
}else{
    console.log('Pode tirar a carteira de habilitação!')
}

// Operador ||(OR) significa OU
var a = 6
var b = 3

console.log(a === 5 || b === 5)
console.log(a === 6 || b === 5)
console.log(a === 6 || b === 3)

// Operador !(NOT) significa NÃO
var c = 5
var d = 5

console.log(c === d)
console.log(!(c > d))
console.log(!(c < d))
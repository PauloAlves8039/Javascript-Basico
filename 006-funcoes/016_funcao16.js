/*
 * Arquivo: 016_funcao16.js
 * Autor: Paulo Alves
 * Descrição: formas diferentes para declaração de função
 * Data: 02/11/2019
*/

// Function declaration - forma normal
console.log(soma(3 ,4))

function soma(x, y){
    return x + y
}

// Function expression
const sub = function(x, y){
    return x - y
}

console.log(sub(3, 4))

// Named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(mult(7, 2))
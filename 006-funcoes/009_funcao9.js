/*
 * Arquivo: 009_funcao9.js
 * Autor: Paulo Alves
 * Descrição: usando funções aninhadas para acessar uma função interna a partir de declarações da função externa
 * Data: 02/11/2019
*/

function externa(a, b){
    function interna(c){
        return c * c
    }
    return interna(a) + interna(b)
}

console.log(a = externa(2,3))
console.log(b = externa(3,4))
console.log(c = externa(4,5))
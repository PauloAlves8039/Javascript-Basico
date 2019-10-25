/*
 * Arquivo: 014_let.js
 * Autor: Paulo Alves
 * Descrição: usando declaração de variáveis para escopo de bloco com let
 * Data: 25/10/2019
*/

var numero = 10
{
    let numero = 15
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)
/*
 * Arquivo: 005_nullEUnderfined.js
 * Autor: Paulo Alves
 * Descrição: exemplificando os tipos null, Underfined e passansgens de dados por valor ou refêrencia.
 * Data: 25/10/2019
*/

/*
 * Underfined - não inicializada
 * Indica a ausência de um valor primitivo na variável
*/ 
var valor
console.log(valor)

/*
 * Null - ausência de valor
 * Indica a ausência de um objeto
*/
valor = null
console.log(valor)

/*
 * Passagem de dados - por valor
 * Na passagem por valor, é passada uma cópia do valor da variável.
*/
var a = 10
var b = 10
console.log(a === b)

/*
 * Passagem de dados - por refêrencia
 * Na passagem por referência, é passada uma referência á própria variável.
*/
var c = {}
var d = c
console.log(c === d)
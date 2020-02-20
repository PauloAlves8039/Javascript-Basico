/*
 * Arquivo: 004-objeto-constante.js
 * Autor: Paulo Alves
 * Descrição: passando valor para uma constante em um objeto.
 * Data: 19/02/2020
*/

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Carlos'




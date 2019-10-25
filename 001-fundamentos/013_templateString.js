/*
 * Arquivo: 013_templateString.js
 * Autor: Paulo Alves
 * Descrição: exemplo de uso do recurso template string para concatenações
 * Data: 25/10/2019
*/

// Concatenando constantes com string
const NOME = 'Paulo'
const TEMPLATE_STRING = `Olá ${NOME}, bem vindo(a) a linguagem Javascript!`
console.log(TEMPLATE_STRING)

// Concatenando string com expressões
console.log(`10 + 5 = ${10 + 5}`)
/*
 * Arquivo: 005_operadorTernario.js
 * Autor: Paulo Alves
 * Descrição: verificando condição de um aluno conforme média usando operador ternário
 * Data: 26/10/2019
*/

let n1 = 8.5
let n2 = 6.4
let n3 = 7.9

let media = (n1 + n2 + n3) / 3

const resultado = (media >= 7) ? 'Aluno Aprovado!' : 'Aluno Reprovado!'
console.log(`A média do aluno é => ${media.toFixed(2)} como resultado: ${resultado}`) 

// Outra forma de uso do operador ternário
// resultado = (media >= 7) ? console.log(`A média é: ${media.toFixed(2)} - Aluno Aprovado!`) : console.log(`A média é: ${media.toFixed(2)} - Aluno Reprovado!`) 
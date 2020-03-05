/**
 * Arquivo: 012-usando-reduce-parte2.js
 * Autor: Paulo Alves
 * Descrição: usando a função reduce para percorrer array e verificar se os alunos são bolsistas.
 * Data: 05/03/2020
*/

const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false },
    { nome: 'Maria', nota: 9.2, bolsita: true },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsita: true }
]

// Verificando se todos os alunos são bolsista
const todosBolsistas = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas))

// Verificando se um aluno é bolsista
const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))


/**
 * Arquivo: 011-usando-reduce-parte1.js
 * Autor: Paulo Alves
 * Descrição: usando a função reduce para percorrer array e somar as notas dos alunos.
 * Data: 05/03/2020
*/

const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false },
    { nome: 'Maria', nota: 9.2, bolsita: true },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsita: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual    
}, 10)

console.log(resultado)
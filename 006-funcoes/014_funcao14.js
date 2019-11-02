/*
 * Arquivo: 014_funcao14.js
 * Autor: Paulo Alves
 * Descrição: utilizando função de callback para extrair notas menores que 7 com a função filter()
 * Data: 02/11/2019
*/

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas = notas.filter(function(nota){
    return nota <= 7
})

console.log(notasBaixas)

// Usando arrow function
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)


/*
 * Arquivo: 003_numeros.js
 * Autor: Paulo Alves
 * Descrição: utilizando o objeto Number para uso de números
 * Data: 25/10/2019
*/

// Verificando se constante do tipo number é inteira
const peso1 = 1.0
console.log(Number.isInteger(peso1))

// Convertendo de string para number
const peso2 = Number('2.0')
console.log(Number.isInteger(peso2))

var avaliacao1 = 9.871
var avaliacao2 = 6.872

// Calculando média
var total = avaliacao1 * peso1 + avaliacao2 * peso2
var media = total / (peso1 + peso2)

// Atribuindo uma quantidade de casas decimais
console.log(media.toFixed(2))

// Convertendo do tipo numerico(decimal) para string
console.log(media.toString())

// Convertendo do tipo numerio(decimal) para binário
console.log(media.toString(2))

console.log(typeof media)
console.log(typeof Number)
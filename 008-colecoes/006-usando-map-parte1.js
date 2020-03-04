/**
 * Arquivo: 006-usando-map-parte1.js
 * Autor: Paulo Alves
 * Descrição: usando a função map para mapear array.
 * Data: 03/03/2020
*/

// Gerando os valores dos elementos dobrados.
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

// Somando elemento com o valor 10
const soma10 = e => e + 10

// Gerando os valor do elemento triplicado.
const triplo = e => e * 3

// Convertendo elemento para valor monetário.
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
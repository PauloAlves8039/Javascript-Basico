/**
 * Arquivo: 002-metodos-array.js
 * Autor: Paulo Alves
 * Descrição: usando métodos importantes em arrays.
 * Data: 02/03/2020
*/

/**
 * Pop - remove último elemento.
 * Push - adiciona elemento na última posição. 
 * Shift - remove elemento na primeira posição. 
 * Unshift - adiciona elemento na primiera posição.
 * Splice - adiciona ou remove elementos em posições distintas.
 * slice - retorna um novo array a partir de um determinado indice.
 */

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Vastappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
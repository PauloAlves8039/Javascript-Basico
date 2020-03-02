/**
 * Arquivo: 003-simulando-array.js
 * Autor: Paulo Alves
 * Descrição: simulando array com objeto.
 * Data: 02/03/2020
*/

const quaseArray = {0: 'Paulo', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Isadora', 'Ana', 'Fernando']
console.log(quaseArray.toString(), meuArray)
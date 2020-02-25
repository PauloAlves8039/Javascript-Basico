/*
 * Arquivo: 008-heranca-parte1.js
 * Autor: Paulo Alves
 * Descrição: usando notação de objetos literais para uso de herança em descrições de veículos.
 * Data: 25/02/2020
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
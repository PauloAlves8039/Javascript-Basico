/*
 * Arquivo: 015-usando-json.js
 * Autor: Paulo Alves
 * Descrição: convertendo um objeto simples para o formato json.
 * Data: 01/03/2020
*/

const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

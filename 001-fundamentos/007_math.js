/*
 * Arquivo: 007_math.js
 * Autor: Paulo Alves
 * Descrição: utilizando algumas funções do objeto Math
 * Data: 25/10/2019
*/

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
const c1 = Math.ceil(0.60)
const c2 = Math.ceil(.95)
const f1 = Math.floor(45.95)
const f2 = Math.floor(-45.95)
const e1 = Math.exp(1)
const r1 = Math.cbrt(2)
const l1 = Math.log(10)
const rd = Math.round(20.49)
const rq = Math.sqrt(5)
const mi = Math.min(3, 5, 7, 9)
const ma = Math.max(3, 5, 7, 9)

console.log(area.toFixed(2))
console.log(typeof Math)
console.log(c1)
console.log(c2)
console.log(f1)
console.log(f2)
console.log(e1)
console.log(r1)
console.log(l1)
console.log(rd)
console.log(rq)
console.log(mi)
console.log(ma)
/*
 * Arquivo: 010-heranca-parte3.js
 * Autor: Paulo Alves
 * Descrição: percorrendo atributos de objeto em herança usando o laço for in.
 * Data: 29/02/2020
*/

const pai = { nome: 'Paulo', corCabelo: 'castanho'}

const filho1 = Object.create(pai)
filho1.nome = 'Fernando'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'João', writable: false, enumerable: true }
})

console.log(filho2.nome)
filho2.nome = 'Julio'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho2){
    filho2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}
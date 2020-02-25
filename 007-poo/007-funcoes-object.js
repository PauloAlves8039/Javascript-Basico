/*
 * Arquivo: 007-funcoes-object.js
 * Autor: Paulo Alves
 * Descrição: usando algumas funções importantes de objeto.
 * Data: 25/02/2020
*/

const pessoa = {
    nome: 'Laura',
    idade: 2,
    peso: 13
}

/**
 * Keys - informa todas as chaves do objeto. 
 * Values - informa todos os valores do objeto. 
 * Entries - devolve as chaves e valores do objeto. 
 * ForEach - realiza uma iteração do objeto. 
 * DefineProperty - define a propriedade de um objeto. 
 * Assign - concatena valores de outros objetos passados por parâmetro em um único objeto.
 */
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writeble: false,
    value: '01/01/2021'
})
pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)


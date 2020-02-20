/*
 * Arquivo: 005-notacao-literal-objeto.js
 * Autor: Paulo Alves
 * Descrição: usando notação literal em objetos.
 * Data: 19/02/2020
*/

const a = 1
const b = 2
const c = 3

// Sintaxe normal
const obj1 = {a: a, b: b, c: c}

// Sintaxe reduzida
const obj2 = {a, b, c}

console.log(obj1, obj2)

// Criando dinamicamnete um atributo em um objeto
const nomeAtributo = 'Nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo

console.log(obj3)

// Definindo função dentro de objeto literal
const obj4 = {
    myFunc1: function(){
        console.log(`Executando a minha função 1`)        
    },
    myFunc2(){
        console.log(`Executando a minha função 2`) 
    }
}

console.log(obj4)

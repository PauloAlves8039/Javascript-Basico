/*
 * Arquivo: 013_funcao13.js
 * Autor: Paulo Alves
 * Descrição: utilizando função de callback para imprimir elementos de um array
 * Data: 02/11/2019
*/

// Outro exemplo de callback
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/*
 * Arquivo: 001_array1.js
 * Autor: Paulo Alves
 * Descrição: usando funções para adição e pesquisa de elementos de um array para exibir valores numéricos
 * Data: 28/10/2019
*/

const valores = [7.7, 8.9, 6.3, 9.2]

// Adicionando um elemento na posição 4
valores[4] = 10

// Adicionando elementos com a função push()
valores.push(15, 30, 48.9)

console.log(valores)
console.log(`O array possui ${valores.length} elementos!`)
console.log(`O último elemento do array é ${valores.pop()}`)
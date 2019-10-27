/*
 * Arquivo: 004_strings.js
 * Autor: Paulo Alves
 * Descrição: utilizando funções para manipulação de string
 * Data: 25/10/2019
*/

let nome = 'P2ulo'

// Obtendo a letra no indice 4
console.log(nome.charAt(4))

// Obtendo o valor de um caractere unicode de uma string 
console.log(nome.charCodeAt(3))

// Retornando valor de um indice
console.log(nome.indexOf('3'))

// Adquirindo valor subsequente de strings
console.log(nome.substring(1))
console.log(nome.substring(0, 3))

// Concatenando strings
console.log('Olá ' .concat(nome).concat("!"))
console.log('Olá ' + nome + '!')

// Substituindo uma string de acordo com o indice
console.log(nome.replace(2, 'a'))

// Convertendo strings em um array
console.log('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta' .split(','))
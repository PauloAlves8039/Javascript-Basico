/*
 * Arquivo: 003_objeto3.js
 * Autor: Paulo Alves
 * Descrição: usando operador destructuring para extrair informações de um objeto
 * Data: 31/10/2019
*/

const pessoa = {
    nome: 'Bruna',
    sexo: 'F',
    idade: 25,
    altura: 1.60,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 100,
        bairro: 'Centro',
        cidade: 'Recife'
    }
}

// Representando o operador destructuring com chaves{}
const{nome, idade} = pessoa
console.log(nome, idade)

// Alterando o nome das variáveis
const {nome: n, idade: i} = pessoa
console.log(n, i)

// Extraindo atributos inexistentes
const {sobrenome, casada} = pessoa
console.log(sobrenome, casada)

// Retirando atributos aninhados
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
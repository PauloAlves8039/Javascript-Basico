/*
 * Arquivo: 014-evitando-modificacoes.js
 * Autor: Paulo Alves
 * Descrição: exemplos para restringir dados em objetos.
 * Data: 01/03/2020
*/

// Object.preventExtensions - previne a extensão do objeto.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - selando objeto mas podendo alterar os seus dados.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)



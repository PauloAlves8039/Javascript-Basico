/**
 * Arquivo: 009-usando-filter-parte1.js
 * Autor: Paulo Alves
 * Descrição: usando filter para filtrar elementos de array.
 * Data: 04/03/2020
*/

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plático', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2400
}))

// Função para filtar produtos acima de R$500.00
const caro = produto => produto.preco >= 500

// Função para filtar produtos frágeis
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
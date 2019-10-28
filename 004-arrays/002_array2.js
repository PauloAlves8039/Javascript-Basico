/*
 * Arquivo: 002_array2.js
 * Autor: Paulo Alves
 * Descrição: usando funções para pesquisa e ordenação de um array com nomes de pessoas
 * Data: 28/10/2019
*/

const pessoas = ['Maria', 'João', 'Bruna', 'Carlos', 'Adriana', 'Fernando', 'Daniel']

// Ordenando o array com a função sort()
pessoas.sort()

pessoas.push('Paulo')

// Removendo o primeiro elemento com a função shift() 
pessoas.shift()

// Removendo o último elemento
// pessoas.pop()

for(let p in pessoas){
    console.log(`${pessoas[p]}`)
}

console.log(`O elemento no índice 2 é: ` + pessoas[2])

// Obtendo substring de elemento do array com a função slice() - nesse caso o array deve possuir strings como elementos.
console.log(pessoas.slice(1, 4))

// Removendo elemento especifico do array com a função splice()
console.log(pessoas.splice(1, 1))

console.log('**** ARRAY ATUALIZADO ****')
for(let p in pessoas){
    console.log(`${pessoas[p]}`)
}
/*
 * Arquivo: 003-outras-declaracoes-objeto.js
 * Autor: Paulo Alves
 * Descrição: outras formas de declarações de objetos.
 * Data: 19/02/2020
*/

// Notação literal
const obj1 = {}
console.log(obj1)


// Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desconto){
    
    this.nome = nome
    
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2.998, 0.25)

console.log(p1.nome, p1.getPrecoComDesconto())
console.log(p2.nome, p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30 * (30 - faltas))
        }
    }
}

const f1 = new criarFuncionario('Paulo', 7980, 4)
const f2 = new criarFuncionario('Isadora', 11400, 1)

console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Fernanda'
console.log(filha)


// Retornando JSON
const fromJSON = JSON.parse('{"info": "Usando JSON"}')
console.log(fromJSON.info)

/*
 * Arquivo: 015_funcao15.js
 * Autor: Paulo Alves
 * Descrição: utilizando função com conceitos básicos da orientação a objetos
 * Data: 02/11/2019
*/

// Usando função construtora
function Carro(velocidadeMaxina = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0

    // Método publico
    this.aceletar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxina){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxina
        }
    }
    // Método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

// Criando uma instância de Carro
const uno = new Carro
uno.aceletar()
console.log(uno.getVelocidadeAtual())

// Criando outra instância de Carro
const ferrari = new Carro(350, 20)
ferrari.aceletar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

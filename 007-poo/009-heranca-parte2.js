/*
 * Arquivo: 009-heranca-parte2.js
 * Autor: Paulo Alves
 * Descrição: acessando atributos usando cadeia de protótipos.
 * Data: 25/02/2020
*/

// Object.prototype.attr0 = 'Z'

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
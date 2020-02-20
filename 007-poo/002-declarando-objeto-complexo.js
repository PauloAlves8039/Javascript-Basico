/*
 * Arquivo: 002-declarando-objeto-complexo.js
 * Autor: Paulo Alves
 * Descrição: declaração de objeto encadeada para exibição de informações sobre carro.
 * Data: 19/02/2020
*/

const carro = {
    modelo: "CrossFox",
    valor: 51.000.toFixed(3),
    proprietario: {
        nome: 'Pedro',
        idade: 45,
        endereco: {
            logradouro: 'Rua Central',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Paulo',
        idade: 20
    }, {
        nome: 'Isadora',
        idade: 19
    }],
    
}

console.log(carro)




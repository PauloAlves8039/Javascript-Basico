/*
 * Arquivo: 001_objeto1.js
 * Autor: Paulo Alves
 * Descrição: objeto para exibir informações de um carro
 * Data: 31/10/2019
*/

const carro = {
    modelo: 'Kwid 1.0 Zen',
    fabricante: 'Renault',
    cor: 'Branco',
    cambio: 'Manual',
    ano: '2019'
}

for(let c in carro){
    console.log(`${c} = ${carro[c]}`)
}
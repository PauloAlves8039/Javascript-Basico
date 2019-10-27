/*
 * Arquivo: 004_forIN.js
 * Autor: Paulo Alves
 * Descrição: Iterando array para exibicição de notas e objeto para exibir nomes de pessoas com o laço 'for in', fazendo uso também dos comandos break e continue. 
 * Data: 27/10/2019
*/

const notas = [6.7, 7.4, 9.8, 7.7]
for(let i in notas){
    console.log(notas[i])
}

console.log('===================================')

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 30,
    peso: 60
}
for(let p in pessoa){
    console.log(`${p} = ${pessoa[p]}`)
}

console.log('===================================')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numeros){
    if(x == 5){
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}

console.log('**********')

for(let y in numeros){
    if(y == 6){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}
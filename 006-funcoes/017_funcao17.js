/*
 * Arquivo: 017_funcao17.js
 * Autor: Paulo Alves
 * Descrição: exibindo mensagem de forma aleatória com a função random()  
 * Data: 02/11/2019
*/

function mensagem(){
    let number = Math.trunc((Math.random()*3)+1)
    switch(number){
        case 1:
            console.log('Olá')
            break
        case 2:
            console.log('Oi, tudo bem?')
            break
        case 3:
            console.log('Como você está?')
            break
    }
}

mensagem()
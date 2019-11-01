/*
 * Arquivo: 004_funcao4.js
 * Autor: Paulo Alves
 * Descrição: função anônima para verificar média de aluno e seu status
 * Data: 01/11/2019
*/

const mediaAluno = function(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3
    
    if(media >= 7.0){
        console.log(`Resultado da média: ${media} o status do aluno é => APROVADO!`)
    }else{
        console.log(`Resultado da média: ${media} o status do aluno é => REPROVADO!`)
    }
}

mediaAluno(5.5, 7.9, 8.4)
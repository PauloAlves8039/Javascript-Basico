/*
 * Arquivo: 018_funcao18.js
 * Autor: Paulo Alves
 * Descrição: tratamento de exceção em função para converter letras em maiúsculas usando Try/Catch/Throw
 * Data: 05/11/2019
*/

// Função para tratamento de exceção com objeto especificando detalhes do erro 
function tratarErro(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function converterLetrasMaiusculas(meuObjeto){
    try{
        console.log(meuObjeto.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Final!!!')
    }
    
}

const meuObjeto = {nome: 'Paulo' }
converterLetrasMaiusculas(meuObjeto)


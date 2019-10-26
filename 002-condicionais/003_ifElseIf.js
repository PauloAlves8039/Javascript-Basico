/*
 * Arquivo: 002_ifElse.js
 * Autor: Paulo Alves
 * Descrição: verificando categoria de nadador através da idade com a condicional 'if/elseif'
 * Data: 26/10/2019
*/

let nome = 'Paulo'
let idade = 21

if(idade <= 4){
    console.log(`O nadador ${nome} tem ${idade} anos, não pode competir, ainda não tem a idade mínima permitida: 5 anos!`)
}else if(idade >= 5 && idade <= 7){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => INFANTIL A!`)
}else if(idade >= 8 && idade <= 10){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => INFANTIL B!`)
}else if(idade >= 11 && idade <= 13){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => JUVENIL A!`)
}else if(idade >= 14 && idade <= 17){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => JUVENIL B!`)
}else if(idade >= 18 && idade <= 39){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => SÊNIOR!`)
}else if(idade >= 40 && idade <= 59){
    console.log(`O nadador ${nome} tem ${idade} anos, a sua categoria é => MASTER!`)
}else if(idade >= 60){
    console.log(`O nadador ${nome} tem ${idade} anos, não pode competir, já chegou a idade máxima permitida: 60 anos!`)
}
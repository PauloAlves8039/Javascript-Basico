/*
 * Arquivo: 016_data.js
 * Autor: Paulo Alves
 * Descrição: exibindo datas com o objeto Date e utilizando alguns funções desse próprio objeto.
 * Data: 25/10/2019
*/

// Retornando um objeto Date
/*
let myDate = new Date()
console.log(myDate)
*/

// Outra forma de uso do Date
let myDate = new Date()

// Funções para exibição de detalhes da data
console.log('Segundos: ' + myDate.getMilliseconds())
console.log('Minutos: ' + myDate.getMinutes())
console.log('Horas: ' + myDate.getHours())
console.log('Dia: ' + myDate.getDay())
console.log('Mês: ' + myDate.getMonth())
console.log('Ano: ' + myDate.getFullYear())
console.log('Número do dia do mês: ' + myDate.getDate())

// Colocando ele como 0 para denominar a variavel como INt
let valorTotal = 0 

let valorConta = parseFloat(prompt('Digite o valor da conta: '))
let gorjeta = parseFloat(prompt('Digite a gorjeta (porcentagem): '))

gorjeta = (valorConta * gorjeta) /100
valorTotal = valorConta + gorjeta
alert('O valor final da sua conta deu: ' + valorTotal)




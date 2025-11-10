
//parseFloat converte para Float
let celsius = parseFloat(prompt('Digite a temperatura em celsius: ')) 
console.log(celsius) 

let fahrenheit = celsius * 1.8 + 32

//Metodo .toFixed fixa quantas casas de fração sairão no resultado.
console.log('A temperatura em fahrenheit é de: ' + fahrenheit.toFixed(2)) 


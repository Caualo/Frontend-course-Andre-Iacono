
let fisrtName = prompt('Digite o seu nome')

//Pega o ID criado e insere a variavel firstName na pagina HTML
//document é a função, getElementById é o metodo, innerHTML é a função pra inserir dentro do HTML
document.getElementById("saudação").innerHTML = 'Hello ' + fisrtName

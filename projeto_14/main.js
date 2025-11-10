
//Declarando a variavel numberList para exibir a lista no HTML
let numberList = document.getElementById(('numberList'))

//Criando um loop: inicialização; condição; incremento
//No createElement estamos criando uma "li"(list Item) na memória HTML e inserindo o "li" na variavel listItem
//textContent nós estamos inserindo um texto dentro do "li" criando anteriormente
//appendChild esta nos permitindo inserir a variavel listItem dentro da variavel numberList(variavel que será exibida no HTML)
for(i = 1; i<=5; i++) {
    let listItem = document.createElement('li')
    listItem.textContent = 'Item ' + i 
    numberList.appendChild(listItem)

}

//Metodo para adicionar uma lista pronta 
//creatTextNode(fruits[i]) vai pegar a posição passada no loop como I de dentro da array "fruits" e inserir dentro da lista  listItem
listItem.appendChild(document.createTextNode(fruits[i]))
function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'orange']
    //Usando o objeto Math com propriedade floor para transformar em numero inteiro
    //Usando o random * o tamanho da variavel colors pra selecionar um numero aleatório
    let ramdomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = ramdomColor
}
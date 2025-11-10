
let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')

//Metodo "addEventListener", quando a variavel checkButton identificar um click vai executar a função
checkButton.addEventListener('click', function(){
    let age = ageInput.value 
    //Exemplo de operador ternario no lugar de IF e Else, serve apenas para duas condições
    let message = (age >= 18) ? 'You are an adult' : 'You are not an adult'
    alert(message)
    //No final do codigo ele vai limpar o campo input e deixar em branco
    ageInput.value = ''
}) 


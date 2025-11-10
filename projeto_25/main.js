//Criando uma variavel para receber uma array das imagens
const images = [
    "images/Coffe.jpg",
    "images/fruta.jpg",
    "images/ferrari.jpg"
]
//Declarando uma variavel para percorrer os Index do array 
let currentIndex = 0


//Declarando variaveis para indexar no ID
let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function() {
    currentIndex++
    if(currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]


})
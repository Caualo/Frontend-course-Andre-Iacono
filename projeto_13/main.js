

let colorList = []

for(let i = 1; i <=3; i++) {
    let userColor = prompt('Digite a cor: ')
    colorList.push(userColor)
}

document.getElementById("finalList").innerHTML = 'Sua lista de cores é: ' + colorList
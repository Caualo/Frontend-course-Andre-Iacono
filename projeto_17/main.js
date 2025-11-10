let randoNumber = Math.floor(Math.random() * 100)
console.log(randoNumber)

function checkRightNumber() {
    let guess = document.getElementById('guess').value 

    if(guess > randoNumber) {
        document.getElementById("message").innerHTML = 'The number is too high'
    }
    else if (guess < randoNumber) {
        document.getElementById("message").innerHTML = 'The number is too low'
    }
    else if (guess == randoNumber) {
        document.getElementById("message").innerHTML = 'Congratulations, ' + randoNumber + ' is the right number'
    }
}
const counter = document.getElementById('Counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let count = 0;


function updateCounter() {
    counter.textContent = count;
}
// Criando a função de somar
incrementButton.addEventListener('click', function() {
    count++;
    updateCounter();
});
// Criando a função de subtrair
decrementButton.addEventListener('click', function() {
    if(count > 0) {
        count--;
        updateCounter();
    }
});

resetButton.addEventListener('click', function() {
    count = 0;
    updateCounter();
});
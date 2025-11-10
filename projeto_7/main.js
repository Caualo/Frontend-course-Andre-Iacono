
let nota = parseInt(prompt('Digite sua nota: '))

if (nota > 100 || nota < 0) {
    console.log('Nota inválida');
}
else if (nota >= 90) {
    console.log('Nota A');
}
else if (nota >= 80) {
    console.log('Nota B');
}
else if (nota >= 70) {
    console.log('Nota C');
}
else if (nota >= 60) {
    console.log('Nota D');
}
else {
    console.log('Nota F');
}
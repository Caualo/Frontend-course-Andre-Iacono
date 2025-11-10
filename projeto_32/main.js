const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let intervalId;
let elapsedTime = 0;

//Função para fomratar o tempo do contador, indicando horas, minutos e segundos
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//Função para o tempo ficar rodando quando der o start
function updateTime() {
  elapsedTime++;
  display.textContent = formatTime(elapsedTime);
}
//Criando a função "start" usando o metodo "setInterval" que executa a função repetidamente durante um tempo que você escolhe
function start() {
  intervalId = setInterval(updateTime, 1000);
  //Habilitando botão stop e desabilitando botão start
  startButton.disabled = true;
  stopButton.disabled = false;
}
//Criando a função "stop" usando o metodo "clearInterval" para parar de executar o updateTime que esta executando pelo metodo setInterval
function stop() {
  clearInterval(intervalId);
  //habilitando botão start e desabilitando botão stop
  startButton.disabled = false;
  stopButton.disabled = true;
}
//Criando a função "reset" para zerar o display
function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  startButton.disabled = false;
  stopButton.disabled = true;
}
//Linkando os botões 
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
//Isso centraliza todo o "estado" da calculadora. Assim, cada função só precisa ler e atualizar esse objeto.
const calculator = {
    displayValue: '0', // valor que aparece no display
    firstOperand: null, // primeiro número (antes do operador)
    waitingForSecondOperand: false, // controla se o próximo dígito será o segundo número
    operator: null, // operador selecionado (+, -, *, /)
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
//   Se (waitingForSecondOperand === true) → quer dizer que o usuário acabou de escolher um operador (+, -, *, /) e a calculadora está esperando que ele comece a digitar o próximo número.
// O displayValue é substituído pelo novo dígito (digit).
// O flag waitingForSecondOperand volta para false (já começou a digitar o segundo número).
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
// Se o display for '0' → substitui pelo novo dígito (pra não ficar 05, 012, etc).
// Se o display já tem outro valor → concatena o novo dígito no final.
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    //Pegando o resultado que aparece no display como string e transformando em number
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    //Condição para se o usuario adicionar um operador em seguida de outro, ele substutui o operador anterior pelo novo.
    //O return sai da função pq não tem mais o que fazer depois.
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
    //Define o "fisrtOperand" caso ainda não tenha
    //!isNaN condiciona o inputValue a ser um numero, caso quisesse condicionar a não ser um numero usar sem o !
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }
  
    updateDisplay();
  });
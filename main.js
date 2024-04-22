document.addEventListener('DOMContentLoaded', function(){
    const display = document.querySelector('.display');
    let operador1 = '';
    let operador = '';
    let operador2 = '';

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', function(){
            if(operador === ''){
                operador1 += this.textContent;
                display.value = operador1;
            } else {
                operador2 += this.textContent;
                display.value = operador2;
            }
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', function(){
            operador = this.textContent;
        });
    });

    document.querySelector('.equal').addEventListener('click', function(){
        let resultado;
        const num1 = parseFloat(operador1);
        const num2 = parseFloat(operador2);
        switch(operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            default:
                resultado = 'Error';
        }

        display.value = resultado;
        operador1 = resultado.toString();
        operador2 = '';
        operador = '';
    });

    document.querySelector('.clear').addEventListener('click', function() {
        operador1 = '';
        operador2 = '';
        operador = '';
        display.value = '';
    });
});

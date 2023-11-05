document.getElementById('sumar').addEventListener('click', function() {
    realizarOperacion('sumar');
});

document.getElementById('restar').addEventListener('click', function() {
    realizarOperacion('restar');
});

document.getElementById('multiplicar').addEventListener('click', function() {
    realizarOperacion('multiplicar');
});

document.getElementById('dividir').addEventListener('click', function() {
    realizarOperacion('dividir');
});

function realizarOperacion(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    switch (operacion) {
        case 'sumar':
        resultado = num1 + num2;
        break;
        case 'restar':
        resultado = num1 - num2;
        break;
        case 'multiplicar':
        resultado = num1 * num2;
        break;
        case 'dividir':
        if (num2 === 0) {
            resultado = 'No se puede dividir por 0';
        } else {
            resultado = num1 / num2;
        }
        break;
    }

    document.getElementById('resultado').textContent = resultado;
}
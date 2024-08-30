function calcularMedia() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let num4 = parseFloat(document.getElementById('num4').value);

    // Verificar se todos os valores são números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todos os números corretamente.';
        return;
    }

    // Calcular a média
    let media = (num1 + num2 + num3 + num4) / 4;

    // Exibir o resultado
    document.getElementById('resultado').innerText = 'A média aritmética é: ' + media.toFixed(2);
}


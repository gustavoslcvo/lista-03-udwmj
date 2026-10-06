const form = document.getElementById('form-juros');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const capital = parseFloat(document.getElementById('capital').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxaPorcentagem) || isNaN(tempo) || capital < 0 || taxaPorcentagem < 0 || tempo < 0) {
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    const taxaDecimal = taxaPorcentagem / 100;
    const montante = capital * Math.pow(1 + taxaDecimal, tempo);

    resultadoDiv.style.color = '#007bff';
    resultadoDiv.textContent = `Montante: R$ ${montante.toFixed(2)}`;
});
const form = document.getElementById('form-circulo');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const raio = parseFloat(document.getElementById('raio').value);

    if (isNaN(raio) || raio < 0) {
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.textContent = 'Insira um valor válido para o raio.';
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);

    resultadoDiv.style.color = '#28a745';
    resultadoDiv.textContent = `Área: ${area.toFixed(2)}`;
});
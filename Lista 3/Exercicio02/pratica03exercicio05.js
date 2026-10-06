const form = document.getElementById('form-esfera');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const raio = parseFloat(document.getElementById('raio').value);

    if (isNaN(raio) || raio < 0) {
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.textContent = 'Insira um valor válido para o raio.';
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    resultadoDiv.style.color = '#28a745';
    resultadoDiv.textContent = `Volume: ${volume.toFixed(2)}`;
});
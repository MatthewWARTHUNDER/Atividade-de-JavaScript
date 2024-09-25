const numeros = [1, 2, 3, 4, 3, 5, 8];

function encontrarIndice(array, valor) {
    return array.indexOf(valor);
}

document.getElementById('buscar').addEventListener('click', () => {
    const valorProcurado = parseInt(document.getElementById('numero').value);
    const indice = encontrarIndice(numeros, valorProcurado);
    const resultado = document.getElementById('resultado');

    if (indice !== -1) {
        resultado.textContent = `O primeiro índice de ${valorProcurado} é: ${indice}.`;
    } else {
        resultado.textContent = `O número ${valorProcurado} não foi encontrado.`;
    }
});

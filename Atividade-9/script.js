const numeros = [34, 12, 5, 78, 1, 45, 23];

function ordenarArray(array) {
    return array.sort((a, b) => a - b); 
}

document.getElementById('ordenar').addEventListener('click', () => {
    const arrayOrdenado = ordenarArray(numeros);
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Array ordenado: ${arrayOrdenado.join(', ')}.`;
});

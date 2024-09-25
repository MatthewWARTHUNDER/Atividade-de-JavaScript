const numeros = [5, 12, 3, 7, 9, 30, 15];

function encontrarMaiorNumero(array) {
    let maior = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; 
        }
    }

    return maior;
}

document.getElementById('encontrar').addEventListener('click', () => {
    const maiorNumero = encontrarMaiorNumero(numeros);
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O maior número no array é: ${maiorNumero}.`;
});

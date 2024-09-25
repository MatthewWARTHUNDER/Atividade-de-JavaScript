const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('filtrar').addEventListener('click', () => {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const listaPares = document.getElementById('lista-pares');
    listaPares.innerHTML = '';

    numerosPares.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        listaPares.appendChild(li);
    });
});

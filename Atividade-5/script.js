let array = [];

function AtualizarLista()
{
    var lista = document.getElementById('arrayDisplay');
    lista.innerHTML = array.join(", ")
    document.getElementById('somaDisplay').innerHTML = array.reduce((acc, curr) => acc + curr, 0 )
}


function AdicionarElemento()
{
    const input = document.getElementById("inputNumber");
    const valor = Number(input.value);
    if(!isNaN(valor)){
        array.push(valor);
        input.value = "";
        AtualizarLista()
    }else{
        alert('O elemento que você acabou de inserir não é um número. por gentileza insira um número válido')
    }
}


function removerElemento()
{
    const input = document.getElementById("inputNumber");
    const valor = Number(input.value);
    const index = array.indexOf(valor)
    if(index > -1){
        array.splice(index, 3);
        input.value = " "
        AtualizarLista()
    } else{
        alert('Um número não está no array')
    }
}

AtualizarLista()

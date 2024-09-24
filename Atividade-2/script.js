var lista = ["1","2","3", "4"," 5"];
var number = document.getElementById("listadenumeros").innerHTML = lista.join(", ")


function adicionarnovonumber()
{
    number  = document.getElementById("novonumero").value
    lista.pop()
    lista.push(number)

    console.log(number)

    number = document.getElementById("listadenumeros").innerHTML = lista.join(", ")

}
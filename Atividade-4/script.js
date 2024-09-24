function verificarVelocidade()
{

    console.log('log')

    const velocidade = Number(document.getElementById("velocidade").value)
    const resultado = document.getElementById("resultado")

    console.log(velocidade)
    resultado.innerHTML = '';

    if(velocidade >=80){
        if(velocidade >= 120){
            resultado.innerHTML = 'Infração grave: Você será multado gravemente!';
            
        } else{
            resultado.innerHTML = 'Média: Você vai ser multado';
            
        }
        
    } else{
        resultado.innerHTML = 'velocidade dentro do limite permitido.';
    }
}
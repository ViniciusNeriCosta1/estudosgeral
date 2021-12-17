var valor, fatorial, contador;

function fator(){
    valor = prompt("Digite o numero para calcular o fatorial: ")
    fatorial =1 
    for(contador=1;contador<=valor;contador++){
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo3").innerText = "O fatorial de " + valor + " e: " + fatorial
}
function fator(){
    var valor = window.document.getElementById('valor').value
    var fatorial, contador
    fatorial =1 
    for(contador=1;contador<=valor;contador++){
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo3").innerText = "O fatorial de " + valor + " é: " + fatorial
}
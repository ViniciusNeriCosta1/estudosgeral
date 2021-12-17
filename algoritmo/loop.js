var valor1, valor2, sair;

function soma(){
    do{
        valor1=prompt("Digite o primeiro valor: ")
        valor2=prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo5").innerText = "Resultado " + (parseInt(valor1) + parseInt(valor2))
        sair=prompt("Deseja sair? S/N ")
    }while(sair != "S"){

    }
}
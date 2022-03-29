function soma(){
    var valor3 = window.document.getElementById('valor3').value
    var valor4 = window.document.getElementById('valor4').value
    var sair = window.document.getElementById('sair').value
    var resultado
    do{
        console.log(valor3)
        resultado = (parseInt(valor3) + parseInt(valor4))
        console.log(resultado)
        document.getElementById("paragrafo5").innerHTML = "Resultado " + resultado
    }while(sair != "S"){
    }
}
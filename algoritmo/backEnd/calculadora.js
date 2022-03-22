function botao(){
    var valor1 = window.document.getElementById('valor1').value
    var valor2 = window.document.getElementById('valor2').value
    var oper = window.document.getElementById('oper').value
    var resultado
    if(oper == '+'){
        resultado = parseInt(valor1) + parseInt(valor2)
    }else if (oper == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    }else if(oper == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }else if(oper == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }else{
        alert("Operador invalido")
    }

    document.getElementById("paragrafo1").innerHTML = resultado
}

function botao2(){
    var valor1 = window.document.getElementById('valor1').value
    var valor2 = window.document.getElementById('valor2').value
    var oper = window.document.getElementById('oper').value
    var resultado
        switch(oper){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
        break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
        break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
        break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
        break;
        default:
            alert ("Operador invalido")
    }
    document.getElementById("paragrafo2").innerHTML = resultado
}
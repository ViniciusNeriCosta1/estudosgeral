var valor1, valor2, resultado, oper;

function botao(){
    valor1 = prompt("Digite o primeiro valor: ")
    oper = prompt("Digite a operação: ")
    valor2 = prompt("Digite o segundo valor: ")
    if(oper == "+"){
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
    document.getElementById("paragrafo1").innerText = resultado
}

function botao2(){
    valor1 = prompt("Digite o primeiro valor: ")
    oper = prompt("Digite a operação: ")
    valor2 = prompt("Digite o segundo valor: ")
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
    document.getElementById("paragrafo2").innerText = resultado
}
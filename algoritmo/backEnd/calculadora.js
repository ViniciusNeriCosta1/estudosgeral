function botao3(){
    const valor1 = window.document.getElementById('valor1').value
    const valor2 = window.document.getElementById('valor2').value
    const oper = window.document.getElementById('oper').value
    let resultado
    //console.log(valor1.value, valor2.value, oper.value)
    //debugger
    if(oper == '+'){
        //console.log(valor1.value, valor2.value, oper.value)
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

    //debugger
    //let result = window.document.getElementById('resultado').innerText

    document.getElementById("result").innerHTML = resultado
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
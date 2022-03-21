function botao3(){
    const valor1 = window.document.getElementById('valor1')
    const valor2 = window.document.getElementById('valor2')
    const oper = window.document.getElementById('oper')
    let botao = window.querySelection('#botao')
    console.log(valor1).value
    console.log(oper).value
    if(oper == "+"){
        alert("alerta1")
        const resultado = parseInt(valor1) + parseInt(valor2)
        alert("alerta2")
    }else if (oper == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    }else if(oper == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }else if(oper == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }else{
        alert("Operador invalido")
    }

    botao.addEventListener('click', function(e){
        console.log(valor1, valor2);
    })
    //let result = window.document.getElementById('resultado').innerHTML

    //document.getElementById("paragrafo1").innerHTML = resultado
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
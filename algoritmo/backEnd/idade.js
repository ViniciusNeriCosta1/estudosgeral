var nome, idade, contador, limite;

function validade(){
    const nome = window.document.getElementById('nome').value
    var limite = window.document.getElementById('limite').value
    console.log(nome)
    contador=0
    while(contador <= limite){
        idade = prompt("Digite a idade do(a) " + nome)
        if(idade>=18){
            document.getElementById("paragrafo4").innerText = nome + " e maior"
        }else{
            document.getElementById("paragrafo4").innerText = nome + " e menor"
            contador++
        }
    }
}
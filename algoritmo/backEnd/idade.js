var nome, idade, contador, limite;

function validade(){
    limite =prompt("Digite quantas vezes verificar a idada: ")
    contador=0
    while(contador <= limite){
        nome =prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do(a) " + nome)
        if(idade>=18){
            document.getElementById("paragrafo4").innerText = nome + " e maior"
        }else{
            document.getElementById("paragrafo4").innerText = nome + " e menor"
            contador++
        }
    }
}
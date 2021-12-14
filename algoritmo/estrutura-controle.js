var nome, nota1, nota2;
nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite sua primeira nota: ")
nota2 = prompt("Digite sua segunda nota: ")
media = (parseInt(nota1)+parseInt(nota2)) /2
if(media >= 50){
alert("Aprovado "+ nome)
}else{
    alert("Reprovado "+ nome)
}
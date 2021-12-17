var nome, nota1, nota2, passou;
nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite sua primeira nota: ")
nota2 = prompt("Digite sua segunda nota: ")
media = (parseInt(nota1)+parseInt(nota2)) /2
passou = false;

if(media >= 50){
    passou = true;
}

if(passou && media >= 70){
    alert("Aprovado " + nome)
}else{
    alert(`Reprovado ${nome}`)
}
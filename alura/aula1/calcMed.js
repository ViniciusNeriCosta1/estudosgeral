function conversao(){
    const dolar = window.document.getElementById('dolar')
    const dolarNumber = Number(dolar.value) * 5.51
    
    let resultado = window.document.getElementById('resultado')
    
    resultado.innerHTML = parseFloat((dolarNumber).toFixed(2))
  }
  
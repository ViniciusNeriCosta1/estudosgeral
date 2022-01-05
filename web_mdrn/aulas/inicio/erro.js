function tratarErroLancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw teste
    throw{
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!') 
    }catch(e){
        tratarErroLancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)   
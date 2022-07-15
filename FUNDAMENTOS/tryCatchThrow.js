function tratarErroeLancar(erro){
    throw new Error('...')
}

function imprimirNomeGritando(obj) {
    try{ //vou tentar 
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){ // caso der erro vai para o catch
        tratarErroeLancar(e)
    }finally{ // sempre vai executar independente se der erro ou não
        console.log('final')
    }
}

const obj = {
    name: 'Roberto' //passei o atributo com nome errado para causar erro propositalmente
}

imprimirNomeGritando(obj)
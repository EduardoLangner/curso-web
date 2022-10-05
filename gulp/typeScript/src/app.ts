import {Carro, Vendavel} from './produto'

function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}`)
}

const c = new Carro()
c.nome = 'Fusca'
c.preco = 10000
exibir(c)
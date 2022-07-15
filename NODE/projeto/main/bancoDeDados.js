const sequence = { // objeto para retornar os ids em sequencia
    _id: 1, // o _valor é um atributo privado
    get id(){ return this._id++ }, // get id é um método público que retorna o valor do atributo privado
}

const produtos = {
    mensagem: "Tô vendo"
} // objeto que vai armazenar os ids dos produtos

function salvarProduto(produto){ // function que vai salvar o produto em produtos{}
    if(!    produto.id){ // se o produto não tiver id ele atribui um id
        produto.id = sequence.id
        produtos[produto.id] = produto// se o produto não tiver id ele cria um id e salva o produto
    } else { // se o produto tiver id ele atualiza o produto
        produtos[produto.id] = produto
    }   
    return produto
}

function getProduto(id){ // function que vai retornar o produto pelo id
    return produtos[id] || "ERROR 40    4" // se o produto existir ele retorna ele, se não ele retorna mensagem de erro
}

function getProdutos(){ // function que vai retornar todos os produtos
    return Object.values(produtos) // retorna todos os produtos que estão dentro de produtos{}
}

function deletaProdutos(id){ // function que vai retornar todos os produtos
    const produto = produtos[id] // pega o produto pelo id
    delete produtos[id] // retorna todos os produtos que estão dentro de produtos{}
    console.log(`produdo com id: ${id} foi deletado\n`)
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, deletaProdutos } // exporta as funções para o server.js 
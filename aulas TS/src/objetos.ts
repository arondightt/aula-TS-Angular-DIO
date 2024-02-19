//objetos sem previsibilidade de dados

let produtos:object={
    nome: "sapato",
    preco: 150
}

//objetos tipado com previsibilidade de dados
type Produto = {
    nome: string,
    preco: number,
    descricao: string
}

let produtoLoja:Produto={
    nome: "sapato",
    preco: 150,
    descricao: "sapato social"
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.20 }',
    '{ "nome": "Borracha", "preco": 3.20 }',
    '{ "nome": "Borracha", "preco": 3.20 }',
    '{ "nome": "Borracha", "preco": 3.50 }',
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
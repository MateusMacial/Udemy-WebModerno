const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

console.log(carrinho);

const arrayCarrinho = carrinho.map(x => JSON.parse(x)).map((x, i) => console.log((i + 1),')' , x.preco));
function criarProduto(nome, preco,){
    return{
        nome,
        preco,
        desconto: 0.20
    }
}

console.log(criarProduto('batata', 2.99));
console.log(criarProduto('laranja', 5.99));
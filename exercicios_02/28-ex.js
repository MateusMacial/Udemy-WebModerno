function filtroQtd(numeros, qtd) {
    return numeros.filter(numero => {

    const quantidadeDeDigitos = String(numero).length;
    
    return quantidadeDeDigitos === qtd;
    });
}
    

console.log(filtroQtd([38, 2, 365, 10, 125, 11], 2));
function cardapio(codigo, qtd){
    switch(codigo){
        case 100: console.log(`Valor total: R$ ${(3.00 * qtd).toFixed(2)}`);
            break;
        case 200: console.log(`Valor total: R$ ${(4.00 * qtd).toFixed(2)}`);
            break;
        case 300: console.log(`Valor total: R$ ${(5.50 * qtd).toFixed(2)}`);
            break;
        case 400: console.log(`Valor total: R$ ${(7.50 * qtd).toFixed(2)}`);
            break;
        case 500: console.log(`Valor total: R$ ${(3.50 * qtd).toFixed(2)}`);
            break;
        case 600: console.log(`Valor total: R$ ${(2.80 * qtd).toFixed(2)}`);
            break;

        default: console.log("Codigo invalido!");
    }
}

cardapio(100, 10);
cardapio(200, 10);
cardapio(300, 10);
cardapio(400, 10);
cardapio(500, 10);
cardapio(600, 10);
cardapio(30, 30);

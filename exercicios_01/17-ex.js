function almento(categoria, salario){
    switch(categoria){
        case 'A': console.log(`Novo sálario: R$ ${(salario * 1.10).toFixed(2)}`);
            break;
        case 'B': console.log(`Novo sálario: R$ ${((salario * 1.15).toFixed(2))}`);
            break;
        case 'C': console.log(`Novo sálario: R$ ${(salario * 1.20).toFixed(2)}`);
            break;

        default: console.log("Valor invalido!");
    }
}

almento('A', 100.00);
almento('B', 100.00);
almento('C', 100.00);
almento('N', 300.00)
function calcularAnuidade(mes, valorAnuidade){
    let valorFinal = 0;

    switch(mes){
        case 1: valorFinal = valorAnuidade;
            break;
        case 2: valorFinal = (valorAnuidade * Math.pow((1.05), 2));
            break;
        case 3: valorFinal = (valorAnuidade * Math.pow((1.05), 3));
            break;
        case 4: valorFinal = (valorAnuidade * Math.pow((1.05), 4));
            break;
        case 5: valorFinal = (valorAnuidade * Math.pow((1.05), 5));
            break;
        case 6: valorFinal = (valorAnuidade * Math.pow((1.05), 6));
            break;
        case 7: valorFinal = (valorAnuidade * Math.pow((1.05), 7));
            break;
        case 8: valorFinal = (valorAnuidade * Math.pow((1.05), 8));
            break;
        case 9: valorFinal = (valorAnuidade * Math.pow((1.05), 9));
            break;
        case 10: valorFinal = (valorAnuidade * Math.pow((1.05), 10));
            break;
        case 11: valorFinal = (valorAnuidade * Math.pow((1.05), 11));
            break;
        case 12: valorFinal = (valorAnuidade * Math.pow((1.05), 12));
            break;

        default: console.log("Erro!");
    }

    return valorFinal.toFixed(2);
}

console.log(`R$ ${calcularAnuidade(1, 100)}`);
console.log(`R$ ${calcularAnuidade(2, 100)}`);
console.log(`R$ ${calcularAnuidade(3, 100)}`);
console.log(`R$ ${calcularAnuidade(4, 100)}`);
console.log(`R$ ${calcularAnuidade(5, 100)}`);
console.log(`R$ ${calcularAnuidade(6, 100)}`);
console.log(`R$ ${calcularAnuidade(7, 100)}`);
console.log(`R$ ${calcularAnuidade(8, 100)}`);
console.log(`R$ ${calcularAnuidade(9, 100)}`);
console.log(`R$ ${calcularAnuidade(10, 100)}`);
console.log(`R$ ${calcularAnuidade(11, 100)}`);
console.log(`R$ ${calcularAnuidade(12, 100)}`);

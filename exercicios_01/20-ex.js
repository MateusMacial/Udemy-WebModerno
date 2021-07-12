function caixa(valorSaque){
    let notas1 = 0;
    let notas5 = 0;
    let notas10 = 0;
    let notas50 = 0;
    let notas100 = 0;
    let valorNota = calculaValorNota(valorSaque);

    while(valorSaque >= valorNota){
        switch(valorNota){
            case 100:
                valorSaque -= 100;
                notas100++;
                break;
            case 50:
                valorSaque -= 50;
                notas50++;
                break;
            case 10:
                valorSaque -= 10;
                notas10++;
                break;
            case 5:
                valorSaque -= 5;
                notas5++;
                break;
            case 1:
                valorSaque -= 1;
                notas1++;
                break;
        }

        valorNota = calculaValorNota(valorSaque);
    }

    if(notas100 > 0){
        console.log(`Notas de 100: ${notas100}`);
    }
    if(notas50 > 0){
        console.log(`Notas de 50: ${notas50}`);
    }
    if(notas10 > 0){
        console.log(`Notas de 10: ${notas10}`);
    }
    if(notas5 > 0){
        console.log(`Notas de 5: ${notas5}`);
    }
    if(notas1 > 0){
        console.log(`Notas de 1: ${notas1}`);
    }
}

function calculaValorNota(valor){
    if(valor >= 100){
        return 100;
    }
    else if(valor >= 50){
        return 50;
    }
    else if(valor >= 10){
        return 10;
    }
    else if(valor >= 5){
        return 5;
    }
    else if(valor >= 1){
        return 1;
    }
}

caixa(153);
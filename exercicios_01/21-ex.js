function planoSaude(idade){
    let valorPlano = 100;

    if(idade <= 10){
        return `R$ ${valorPlano + 80}`;
    }
    else if(idade <= 30){
        return `R$ ${valorPlano + 50}`;
    }
    else if(idade <= 60){
        return `R$ ${valorPlano + 95}`;
    }
    else{
        return `R$ ${valorPlano + 130}`;
    }
}

console.log(planoSaude(8));
console.log(planoSaude(18));
console.log(planoSaude(38));
console.log(planoSaude(48));
console.log(planoSaude(88));
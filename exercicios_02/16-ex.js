function anoBissexto(ano){
    if(ano % 4 === 0 && !(ano % 100 === 0) || ano % 400 === 0){
        return "Ano bissexto!"
    }
    else{
        return "Ano não bissexto!"
    }
}

console.log(anoBissexto(2020));
console.log(anoBissexto(2100));
console.log(anoBissexto(2000));
console.log(anoBissexto(1500));
function salario(horas, valorHora){
    console.log(`Salário igual a R$ ${(horas * valorHora).toFixed(2)}`);
}

salario(150, 40.5);
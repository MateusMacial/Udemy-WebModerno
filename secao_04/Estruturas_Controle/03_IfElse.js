const imprimirResultado = function(nota) {
    if(nota >= 7) 
    {
        console.log('Aprovado!');
    } 
    else 
    {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // cuidado!!! linguagem fracamente tipada, compara a string no if e da falso retornando o else
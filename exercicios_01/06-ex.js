function jurosSimples(capitalInicial, juros, tempoAplicado)
{
    return capitalInicial + (capitalInicial * juros * tempoAplicado);
}

function jurosComposto(capitalInicial, juros, tempoAplicado)
{
    return capitalInicial * (1 + juros) ** tempoAplicado;
}

let j1 = jurosSimples(100, 10/100, 2);
let j2 = jurosComposto(100, 10/100, 2);

console.log(j1.toFixed(2));
console.log(j2.toFixed(2));
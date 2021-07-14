function troca(obj){

    const invertidos = Object.entries(obj).map( parChaveValor => parChaveValor.reverse());

    return Object.fromEntries(invertidos);
}

console.log(troca({
    nome: 'mario', idade: 22
}))
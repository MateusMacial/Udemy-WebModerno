function repet(valor, qtd){
    let vect = [];
    
    for(let i=0; i<qtd; i++){
        vect.push(valor);
    }
    return vect
}

console.log(repet(2, 4))
console.log(repet('macao', 3))
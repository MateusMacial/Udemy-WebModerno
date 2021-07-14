function contLetra(letra, frase){
    let cont = 0;
    let vect = frase.split('');

    for(let i=0; i<vect.length; i++){
        if(vect[i] === letra){
            cont++;
        } 
    }
    return cont;
}

console.log(contLetra('a', 'ola mundo, ate mais'));
console.log(contLetra("r", "A sorte favorece os audazes"));
console.log(contLetra("c", "Conhece-te a ti mesmo"));
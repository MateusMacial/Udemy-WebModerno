function mediaAritmetica(vect){
    let soma = 0;

    for(let i=0; i<vect.length; i++){
        soma += vect[i];
    }

    let media = soma / vect.length;

    return `Media: ${media.toFixed(2)}`
}

console.log(mediaAritmetica([2, 5, 78, 89, 56, 12, 44]))
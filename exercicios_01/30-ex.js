function maiorMenor(vect){
    let maior = vect[0];
    let menor = vect[0];

    for(let i=0; i<vect.length; i++){
        if(vect[i] > maior){
            maior = vect[i];
        }
        if(vect[i] < menor){
            menor = vect[i];
        }
    }

    return `Maior: ${maior}, Menor: ${menor}.`
}

console.log(maiorMenor([23, 55, 41, 123, 12, 45, 365, 4, 412]))
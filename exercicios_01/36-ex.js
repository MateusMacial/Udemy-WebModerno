function vetorMult(vect, numero){

    let result = [];

    for(let i=0; i<vect.length; i++){
        let add = vect[i] * numero;
        result.push(add);
    }

    return result;
}

function vetorMult2(vect, numero){
    let result = [];

    for(let i=0; i<vect.length; i++){
        if(vect[i] > 5){
            let add = vect[i] * numero;
            result.push(add);
        }
    }

    return result;
}

console.log(vetorMult([2, 3, 5, 12, 15], 2));
console.log(vetorMult2([2, 3, 5, 12, 15], 2));
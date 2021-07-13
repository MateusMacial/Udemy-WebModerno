function intervalo(vect){
    let dentro = 0;
    let fora = 0;

    for(let i=0; i<vect.length; i++){
        if(vect[i] >= 10 && vect[i] <= 20){
            dentro++;
        }
        else{
            fora++;
        }
    }

    return `Dentro do intervalo(10 - 20): ${dentro}, fora do intervalo: ${fora}.`
}

console.log(intervalo([2, 5, 12, 17, 20, 22, 23, 55, 46, 102]))
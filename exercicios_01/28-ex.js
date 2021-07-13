function parImpar(vetor){
    let par = 0;
    let impar = 0;

    for(let i=0; i<vetor.length; i++){
        if(vetor[i] % 2 === 0){
            par++;
        }
        else{
            impar++;
        }
    }

    return `Par: ${par}, Impar: ${impar}`
}

console.log(parImpar([2, 3, 6, 13, 27, 29, 33, 44, 67, 88, 91]));
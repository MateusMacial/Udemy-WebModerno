function negativos(vect){
    let neg = 0;

    for(let i=0; i<vect.length; i++){
        if(vect[i] < 0){
            neg++;
        }
    }
    
    return `Números negativos: ${neg}.`
}

console.log(negativos([2, 3, 5, -89, -45, 12, -66, -1, 23, 0]))
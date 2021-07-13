function troca(vect1, vect2){
    if (vect1.length == vect2.length) {
        for(let i=0; i<vect1.length; i++){
            vect1[i] = vect1[i] + vect2[i];
            vect2[i] = vect1[i] - vect2[i];
            vect1[i] = vect1[i] - vect2[i];
        }
    }
    else{
        return 'Tamanhos diferentes.'
    }

    console.log("Vetor 1: ", vect1);
    console.log("Vetor 2: ", vect2);
}

let vect1 = [1, 2, 3];
let vect2 = [4, 5, 6];

troca(vect1, vect2);
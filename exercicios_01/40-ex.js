function medias(vect){

    let vectNotas = [];

    for(let i=0; i<vect.length; i++){
        if(vect[i] < 4.9){
            vectNotas.push("D");
        }
        else if(vect[i] < 6.9){
            vectNotas.push("C");
        }
        else if(vect[i] < 8.9){
            vectNotas.push("B");
        }
        else{
            vectNotas.push("A");
        }
    }

    for(let i=0; i<vect.length; i++){
        console.log("Nota: ", vect[i], "Conceito: ", vectNotas[i]);
    }
}

medias([4.7, 3.5, 6.4, 7.8, 8.1, 9.5, 10.00]);
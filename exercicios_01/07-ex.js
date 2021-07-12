function baskara(a, b, c){
    let delta = (b ** 2) - (4 * a * c);
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    let vect = [];

    if(x1 >= 0){
        vect.push(x1);
    }
    else{
        vect.push("Delta negativo");
    }
    if(x2 >= 0){
        vect.push(x2);
    }
    else{
        vect.push("Delta negativo");
    }
    
    console.log(delta);
    console.log(x1);
    console.log(x2);
    console.log(vect);

}

baskara(1, -1, -6);

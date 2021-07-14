function entre(numero, min, max, inclusivo = false){

    if(inclusivo === true){
        if(numero === min || numero === max){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
    else{
        if(numero > min && numero < max){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}

entre(3, 0, 30);
entre(23, 34, 55);
entre(12, 12, 44, true);
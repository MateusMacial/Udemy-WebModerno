function fatorial(valor){

    let result = valor;

    if(valor === 0){
        return "Digite valor valido!!!"
    }
    else{
        for(let i=1; i<valor; i++){
            result *= valor - i;
        }

        return result;
    }
}

console.log(fatorial(7));
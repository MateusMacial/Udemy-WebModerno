function impares(inicio = 0, fim = 100){
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for(let i=inicio; i<fim; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

impares(2, 12);
impares(23, 3);
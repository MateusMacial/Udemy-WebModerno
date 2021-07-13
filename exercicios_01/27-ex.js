function calcularCrescimento(altura1, taxa1, altura2, taxa2){
    let anos = 0;

    if(altura1 > altura2 && taxa1 > taxa2){
        return "A criança menor não ira passar a maior!"
    }

    if(altura1 > altura2){
        while(altura2 < altura1){
            altura1 += taxa1;
            altura2 += taxa2;
            anos++;
        }
    }
    else{
        while(altura1 < altura2){
            altura1 += taxa1;
            altura2 += taxa2;
            anos++;
        }
    }

    return `A criança menor passara a maior em: ${anos} ano(s).`;
}

console.log(calcularCrescimento(1.30, 0.20, 1.78, 0.05));
console.log(calcularCrescimento(1.80, 0.10, 1.50, 0.25));
console.log(calcularCrescimento(1.45, 0.30, 1.20, 0.05));
// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8); //ignora os outros valores que n correspondem aos parametros da funcao
imprimirSoma();

// Funcao com retorno
function soma(a, b = 1) {//deixa um valor padrao para o parametro b
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
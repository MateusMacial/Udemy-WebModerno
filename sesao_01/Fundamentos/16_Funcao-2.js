  
// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 5));

// retorno implícito
const subtracao = (a, b) => a - b; //quando mais de 1 parametro precisa de parenteses
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);//um unico parametro nao precisa parenteses
imprimir2('Legal!!!');
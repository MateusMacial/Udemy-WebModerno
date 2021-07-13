function calcularNota(codigo, nota1, nota2, nota3){

    let resultado = maiorNota(nota1, nota2, nota3);

    if(resultado > 50.00){
        console.log("Aprovado: ", resultado.toFixed(2));
    }
    else{
        console.log("Reprovado: ", resultado.toFixed(2));
    }
}

function maiorNota(nota1, nota2, nota3){
    let maiorNota = 0;
    let nota1Peso3 = 0;
    let nota2Peso3 = 0;

    if(nota1 > nota2 && nota1 > nota3){
        maiorNota = nota1;
        nota1Peso3 = nota2;
        nota2Peso3 = nota3;
    }
    else if(nota2 > nota3 && nota2 > nota1){
        maiorNota = nota2;
        nota1Peso3 = nota1;
        nota2Peso3 = nota3;
    }
    else{
        maiorNota = nota3;
        nota1Peso3 = nota1;
        nota2Peso3 = nota2;
    }

    return mediaPonderada(maiorNota, nota1Peso3, nota2Peso3);
}

function mediaPonderada(maiorNota, nota2, nota3){

    return ((maiorNota * 4) + (nota2 * 3) + (nota3 * 3)) / (3 + 2 + 2);

}

console.log("Entre com o codigo do aluno e suas 3 notas!");
calcularNota(12, 80, 50, 47);
calcularNota(23, 33, 12, 0)
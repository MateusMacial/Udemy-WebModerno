function segundoMaior(vect){
    const maior = Math.max(...vect);
    vect = vect.filter(numero => numero != maior);
    const segundoMaior = Math.max(...vect);

    return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
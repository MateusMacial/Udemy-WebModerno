function sumVect(vect){
    let sum = vect.reduce((x, y) => x + y);

    return sum / vect.length;
}

console.log(sumVect([2, 4, 3]));
console.log(sumVect([12, 4, 34, 16]));
console.log(sumVect([2, 14]));
function arraySum(vect){
    let resp = vect.reduce((x, y) => x + y);
    return resp;
}

console.log(arraySum([10, 10, 10]));
console.log(arraySum([15, 15, 15, 15]));
console.log(arraySum([13, 15, 18, 125]));
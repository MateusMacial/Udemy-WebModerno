function menor(vect){
    let resp = vect.reduce((x, y) => x < y ? x : y);

    return resp;
}

console.log(menor([10, 5, 35, 65]));
console.log(menor([5, -15, 50, 3]));

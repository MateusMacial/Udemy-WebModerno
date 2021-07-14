function firstLast(vect){
    let resp = [];
    let last = vect.length;

    resp.push(vect[0]);
    resp.push(vect[last - 1]);

    return resp;
}
console.log(firstLast([3, 3, 6, 'macaco', 'gato']));
console.log(firstLast([1, 2, 'gato', 'macaco']));
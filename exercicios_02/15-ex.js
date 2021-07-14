function apenasPar(vect){
    const resp = [];

    for(let i=0; i<vect.length; i++){
        if(vect[i] % 2 === 0 && i % 2 === 0){
            resp.push(vect[i]);
        }
    }

    return resp;
}

console.log(apenasPar([3, 2, 4, 12, 9, 10]));
console.log(apenasPar([1, 2, 3, 4]));
console.log(apenasPar([10, 70, 22, 43]));


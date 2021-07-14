function filtraNum(vect){
    result = vect.filter(x => typeof(x) === "number");
    return result
}

console.log(filtraNum([1, 2, 'gato', 5, 7, 'macaco']));
console.log(filtraNum(['gato', 'macaco']))
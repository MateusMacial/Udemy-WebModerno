function comparar(n1, n2){
    if(n1 === n2){
        return true;
    }
    else{
        return false;
    }
}

console.log(comparar(0, 0)); // retornará true
console.log(comparar(0, "0")); // retornará false
console.log(comparar(5, 1)); // retornará false
function comparar(n1, n2){
    if(n1 === n2){
        return true;
    }
    else{
        return false;
    }
}

console.log(comparar(0, 0)); // retornarĂ¡ true
console.log(comparar(0, "0")); // retornarĂ¡ false
console.log(comparar(5, 1)); // retornarĂ¡ false
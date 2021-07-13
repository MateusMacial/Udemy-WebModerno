function iguais(palavra1, palavra2){
    if(palavra1.toUpperCase() === palavra2.toUpperCase()){
        return true;
    }
    else{
        return false
    }
}

console.log(iguais('BaNaNa', 'banaNA'));
console.log(iguais('macaco', 'MACACO'))
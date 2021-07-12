function sistema(nota){ 
    if(nota < 40){
        if(nota < 38){
            return "Reprovado"
        }
        else{
            return "Aprovado";
        }
    }
    else{
        return "Aprovado"
    }
}

console.log(sistema(60.00));
console.log(sistema(37.8));
console.log(sistema(39.8));
console.log(sistema(39.3));
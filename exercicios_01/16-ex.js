function calc(a, simb, b){
    switch(simb){
        case '+': return a + b;
            break;
        case '-': return a - b;
            break;
        case '*': return a * b;
            break;
        case '/': return a / b;
            break;
        
        default: return 'Sinal invalido!';
            
    }
}

console.log(calc(10, '+', 25));
console.log(calc(10, '-', 25));
console.log(calc(10, '*', 25));
console.log(calc(10, '/', 25));
console.log(calc(10, 'j', 25));
function sorteio(numero){
    let random = (Math.random() * 10).toFixed(0);
    if(random == numero){
        return `Parabéns! O número sorteado foi o ${random}`
    }
    else{
        return `Que pena! O número sorteado foi o ${random}`
    }
    
}

console.log(sorteio(4))
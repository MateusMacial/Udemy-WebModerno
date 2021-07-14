function palavraSemelhante(palavra, vect){
    return vect.filter(p => p.includes(palavra));
}

console.log(palavraSemelhante("pro", ["programação", "mobile", "profissional"]));
console.log(palavraSemelhante("java", ["javascript", "java", "c++"]))
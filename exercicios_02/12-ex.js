function removerProp(obj, prop){
    
   const copia = Object.assign({}, obj);
   delete copia[prop];

   return copia;
}

console.log(removerProp({a: 1, b: 2}, "a"));
console.log(removerProp({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"));
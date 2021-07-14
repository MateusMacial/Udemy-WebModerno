function objToArray(obj){
   return Object.entries(obj);
}

const obj1 = {
    nome: "Mario",
    idade: 23
}

console.log(objToArray(obj1));

console.log(objToArray({
    codigo: 11111,
    preco: 12000
    }))


const prod1 = {};//criando objeto vazio
prod1.nome = 'Celular Ultra Mega';//atribuindo chave(atributo) e valor
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
};//outro jeito de criar

console.log(prod2);
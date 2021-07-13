const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // massa sai, tira o ultimo elemento
console.log(pilotos);

pilotos.push('Verstappen');//add depois do ultimo
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton');//adiciona na 1 posicao
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');//primeiro parametro é em depois de qual indice vai ser adicionade, depois o valor de itens a ser deletado, e depois os que se quer adicionar, pode ser usado para colocar ou tirar itens do array
console.log(pilotos);

// remover
pilotos.splice(3, 1); // massa sai
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);//retorna nova array a partir do indice passado

const algunsPilotos2 = pilotos.slice(1, 4);//retorna um novo array a partir do primeiro parametro até o segundo parametro, esse valor que está no indice do segundo parametro não entra
console.log(algunsPilotos2);
function carro(modelo){
    switch(modelo){
        case 'hatch' : console.log("Compra efetuada com sucesso!");
            break;
        case 'sedan' : 
        case 'motocicleta' :
        case 'caminhao' : console.log("Tem certeza que não prefere este modelo?");
            break;

        default : console.log("Não trabalhamos com este tipo de automóvel aqui!");
    }
}

carro('hatch');
carro('sedan');
carro('motocicleta');
carro('caminhao');
carro('macaco');

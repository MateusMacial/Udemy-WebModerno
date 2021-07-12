function validarDia(dia){
    switch(dia){
        case 1:
        case 7: console.log("Dia não util!")
                break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: console.log("Dia util")
                break;
        default : console.log("Valor invalido")
            break;
    }
}

validarDia(0);
validarDia(1);
validarDia(2);
validarDia(3);
validarDia(4);
validarDia(5);
validarDia(6);
validarDia(7);

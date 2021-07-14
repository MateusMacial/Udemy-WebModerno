function inverso(valor){
    if(typeof valor === "boolean"){
        if(valor === true){
            console.log(false);
        }
        else{
            console.log(true);
        }
    }
    else if(typeof valor === "number"){
        console.log(valor - (valor * 2));
    }
    else{
        console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${typeof valor}`);
    }
}

inverso(true);
inverso(false);
inverso("6");
inverso(-2000);
inverso("programação");

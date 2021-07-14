function mult(n1, n2){
    if(n1 >= 0 && n2 >= 0){
        console.log(`${aux(n1, n2)}`);
    }
}

function aux(n1, n2){
    if(n1 === 0 || n2 === 0){
        return 0;
    }
    else{
        let sum = 0;

        while(n1 != 0){
            sum += n2;
            n1--;
        }
        return sum;
    }
}

mult(2, 4);
mult(4, 2);
mult(0, 4);
mult(3, 0);
mult(3, 3);
mult(12,10)
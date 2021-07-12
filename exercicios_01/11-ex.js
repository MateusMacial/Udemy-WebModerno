function bissesxto(ano){
    if(ano % 400 == 0){
        return true;
    }
    else if(ano % 100 == 0){
        return false;
    }
    else if(ano % 4 == 0){
        return true;
    }
    else{
        return false;
    }

}

console.log(bissesxto(2020));
console.log(bissesxto(2000));
console.log(bissesxto(1900));
console.log(bissesxto(1500));
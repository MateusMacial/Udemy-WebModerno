let listPoints = [30, 40, 20, 4, 51, 25, 42, 38, 56, 100];

function tratamentoList(listPoints){
    let list = listPoints;
    let qtdRecords = 0;
    let worstGame = 1;
    let worstScore = list[0];
    let bestScore = list[0]

    for(let i=1; i<list.length; i++){
        if(list[i] > bestScore){
            qtdRecords++;
            bestScore = list[i]
        }
        else if(list[i] < worstScore){
            worstScore = list[i];
            worstGame = i+1;
        }
    }

    return [qtdRecords, worstGame];
}

console.log(tratamentoList(listPoints));
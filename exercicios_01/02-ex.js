function triangulos(ladoA, ladoB, ladoC)
{
    if(ladoA === ladoB && ladoA === ladoC)
    {
        console.log("Triangulo Équilatero");
    }
    else if
    (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log("Triangulo Escaleno");
    }
    else
    {
        console.log("Triangulo Isósceles");
    }
}

triangulos(2,2,2);
triangulos(2,3,3);
triangulos(1,2,3);
console.log("-------------")
triangulos(5,8,34);
triangulos(5,7,5);
triangulos(33,56,89);
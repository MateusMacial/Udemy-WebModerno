function convert(value)
{
    console.log(`R$${value.toFixed(2).toString().replace(".", ",")}`);
}

convert(0.3333333333333);
convert(2.6666665);
convert(5.88888888889);
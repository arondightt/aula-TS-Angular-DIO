let altura: number;
let peso: number;
let imc: number;
let frase: string;

frase = "O IMC é: ";
altura = 1.75;
peso = 88;

function calcularIMC( altura:number, peso:number ){
    imc = peso/(altura*altura);
    return imc;
}

console.log (frase + calcularIMC(altura, peso));


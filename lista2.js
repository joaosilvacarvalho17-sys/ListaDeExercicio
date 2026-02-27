//criar um programa que mostre se um numero e positivo ou negativo
let num1 = 99;
if(num1>=0){
    console.log(`o numero ${num1} é positivo`);
} else{
    console.log(`o numero ${num1} é negativo`);
}
//criar um programa que mostre se o ano e bissexto
let ano = 2025;
if(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)){
    console.log(`o ano ${ano} é bissexto`);
} else{
    console.log(`o ano ${ano} não é bissexto`);
}

//criar um programa que mostre uma senha e a mensagem acesso permitido
let senha = "joao234";
if(senha === "joao123"){
    console.log("Acesso permitido");
} else{
    console.log("Acesso negado");
}
//criar um programa que mostre um desconto de 5% para compras maiores que 100 reais
let valorCompra = 150;
if(valorCompra > 100){
    let desconto = valorCompra * 0.05;
    let valorFinal = valorCompra - desconto;
    console.log(`O valor final com desconto é ${valorFinal}`);
} else{
    console.log(`O valor da compra é ${valorCompra}, sem desconto`);
}
//Criar um programa que classifique uma pessoa como criança, adolescente, adulto de acordo com a idade
let idade = 25;
if(idade < 12){
    console.log("Criança");
} else if(idade < 18){
    console.log("Adolescente");
} else{
    console.log("Adulto");
}
//Criar um Programa que mostre qual tipo de triãngulo de acordo com seus lados (equilátero, isósceles ou escaleno)
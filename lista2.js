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
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;
if(lado1 === lado2 && lado2 === lado3){
    console.log("Triângulo Equilátero");
} else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Triângulo Isósceles");
} else{
    console.log("Triângulo Escaleno");
}
//Criar um programa que mostre conceitos a b c ou d e acordo com as notas
let nota = 85;
if(nota >= 90){
    console.log("Conceito A");
} else if(nota >= 80){
    console.log("Conceito B");
} else if(nota >= 70){
    console.log("Conceito C");
} else{
    console.log("Conceito D");
}
//Criar um programa para verificar se o número 12 é divisível por 2 e por 3.
let numero = 12;
if(numero % 2 === 0 && numero % 3 === 0){
    console.log(`O número ${numero} é divisível por 2 e por 3`);
} else{
    console.log(`O número ${numero} não é divisível por 2 e por 3`);
}
//Criar um programa para mostrar um desconto de 12% para produtos acima de R$800.
let valorProduto = 900;
if(valorProduto > 800){
    let desconto = valorProduto * 0.12;
    let valorFinal = valorProduto - desconto;
    console.log(`O valor final com desconto é ${valorFinal}`);
} else{
    console.log(`O valor do produto é ${valorProduto}, sem desconto`);
}

//Criar um programa que mostre os números de 1 a 10 usando laço de repetição.
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
//Criar um programa para mostrar apenas os números pares entre 1 e 20.
let j = 1;
while(j <= 20){
    if(j % 2 === 0){
        console.log(j);
    }
    j++;
}
//Criar um programa para mostrar apenas os números ímpares entre 1 e 20.
let k = 1;
while(k <= 20){
    if(k % 2 !== 0){
        console.log(k);
    }
    k++;
}

//Criar um programa para mostrar a tabuada do 5.
let num = 5;
let l = 1;
while(l <= 10){
    console.log(`${num} x ${l} = ${num * l}`);
    l++;
}

//Criar um programa para mostrar os números de 1 a 7 usando while.
let m = 1;
while(m <= 7){
    console.log(m);
    m++;
}

//Criar um programa para mostrar a tabuada do 3 usando while.
let n = 3;
let o = 1;
while(o <= 10){
    console.log(`${n} x ${o} = ${n * o}`);
    o++;
}

//Criar um programa para mostrar o fatorial de 5.
let fatorial = 1;
let p = 1;
while(p <= 5){
    fatorial *= p;
    p++;
}
console.log(`O fatorial de 5 é ${fatorial}`);

//Criar um programa para saber se o número 7 é primo.
let numeroPrimo = 7;
let isPrimo = true;
let q = 2;
while(q < numeroPrimo){
    if(numeroPrimo % q === 0){
        isPrimo = false;
        break;
    }
    q++;
}
if(isPrimo){
    console.log(`O número ${numeroPrimo} é primo`);
} else{
    console.log(`O número ${numeroPrimo} não é primo`);
}

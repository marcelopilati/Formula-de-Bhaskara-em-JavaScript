import input from 'readline-sync';

console.log("FORMULA DE BHASKARA");

let a = input.question("Insira o valor referente a 'a': ");

let b = input.question("Insira o valor referente a 'b': ");

let c = input.question("Insira o valor referente a 'c': ");

let delta = (b * b) - 4 * a * c;

let raiz1 = -b + Math.sqrt(delta) / 2 * a;
let raiz2 = -b - Math.sqrt(delta) / 2 * a;

console.log("As raizes da equacao de segundo grau sao: " + raiz1 + " e " + raiz2);
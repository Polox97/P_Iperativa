
function calcularIndiceDeMasaCorporal(peso,altura){
    return peso/(altura*altura);
}

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

let nombreJugador = "Juan";
let golesJugador = 0;
let precioEnDolares = 0;

function hacerGol(){
    golesJugador = golesJugador + 1;
    precioEnDolares = precioEnDolares + 10000;
    return "GOL!!!!!!!!";
}

function hattrick(){
    hacerGol();
    hacerGol();
    hacerGol();
    precioEnDolares = precioEnDolares + precioEnDolares * 0.10;
}

// -------- CASOS DE USO ---------- //

console.log("");
console.log(calcularIndiceDeMasaCorporal(60,1.72));

console.log("");
console.log(suma(3,4));
console.log(resta(5,4));
console.log(multiplicacion(3,4));
console.log(division(20,4));

console.log("");
console.log(hacerGol());
console.log(hacerGol());
console.log(hacerGol());
console.log(hacerGol());
console.log("");
console.log("Nombre: "+nombreJugador);
console.log("Goles: "+golesJugador);
console.log("Precio: "+precioEnDolares);

console.log("");
hattrick();
console.log("Nombre: "+nombreJugador);
console.log("Goles: "+golesJugador);
console.log("Precio: "+precioEnDolares);
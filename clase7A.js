let  suma = (numero1, numero2) => numero1 + numero2;
let  resta = (numero1, numero2) => numero1 - numero2;
let  multiplicacion = (numero1, numero2) => numero1 * numero2;
let  division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1,numero2);

console.log(calculadora(10,5,suma));
console.log(calculadora(10,5,resta));
console.log(calculadora(10,5,multiplicacion));
console.log(calculadora(10,5,division));

function agregarHttp(url) {
    return "http://" + url;
}

function procesar(array,callback){
    for( let i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

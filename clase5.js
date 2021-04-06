
// ---- ejercicio 1 ---- //

function invertir(elementos){
    let inv = [];
    inv.push(elementos.pop())
    inv.push(elementos.pop())
    inv.push(elementos.pop())
    inv.push(elementos.pop())

    return inv;
}

let ejem = [1,2,3,4];
ejem = invertir(ejem);
console.log(ejem); // [ 4, 3, 2, 1 ]

// ---- ejercicio 2 ---- //

function pares(elementos){
    let inv = [];

    elementos[0]%2==0 ? inv.push(elementos[0]) : null;
    elementos[1]%2==0 ? inv.push(elementos[1]) : null;
    elementos[2]%2==0 ? inv.push(elementos[2]) : null;
    elementos[3]%2==0 ? inv.push(elementos[3]) : null;

    return inv;
}

let ejem2 = [1,2,3,4];
ejem2 = pares(ejem2);
console.log(ejem2); // [ 2, 4 ]

// ---- ejercicio 3 ---- //

function tipoArray(tipo, elementos){
    let bool = true;
    typeof elementos[0] !== tipo ? bool = false : null;
    typeof elementos[1] !== tipo ? bool = false : null;
    typeof elementos[2] !== tipo ? bool = false : null;
    typeof elementos[3] !== tipo ? bool = false : null;
    return bool;
}

let ejem3 = [1,2,3,4];
let ejem4 = [1,2,3,"hola"];
console.log(tipoArray("number", ejem3)); // True
console.log(tipoArray("number", ejem4)); // False

// ---- ejercicio 4 ---- //

function sumaArray(elementos){
    let sumatoria = 0;
    if(tipoArray("number", elementos)){
        sumatoria = sumatoria + elementos[0];
        sumatoria = sumatoria + elementos[1];
        sumatoria = sumatoria + elementos[2];
        sumatoria = sumatoria + elementos[3];

        return sumatoria;
    }else{
        return "Error: array corrupto";
    }
}

let ejem5 = [1,2,3,4];
let ejem6 = [1,2,3,"hola"];
console.log(sumaArray(ejem5)); // 10
console.log(sumaArray(ejem6)); // Error: array corrupto

// ---- ejercicio 5 ---- //

function paresInvertidos(elementos){
    let inv;
    if(tipoArray("number", elementos)){
        inv = invertir(elementos);
        return pares(inv);
    }else{
        return "Error: array corrupto";
    }
}

let ejem7 = [1,2,3,4];
console.log(paresInvertidos(ejem7)); // [ 4, 2]

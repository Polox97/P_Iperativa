function puedeSubir(altura, acomp){
    if(altura>140 && altura<200)
    {
        return true;
    }
    else if(altura<=140 && altura>=120 && acomp == true){
        return true;
    }
    else{
        return false;
    }
}

function esPar(numero){
    return numero%2==0 ? "PAR" : "IMPAR";
}

function realizoPago(pago){
    return pago === true ? "Levantar" : "No Levantar";
}

function compRandom(num){
    return Math.floor(Math.random()*11) == num ? "Igual" : "No es igual";
}

function esNavidad(dia,mes){
    return dia == 24 && mes == 12 ? "NAVIDAD!!" : "No es navidad";
}

function diasMes(mes) {
    switch (mes) {
      case "Enero" || "Marzo" || "Mayo" || "Julio" || "Agosto" || "Octubre" || "Diciembre":
        dias = "31 Días";
        break
      case "Abril" || "Junio" || "Septiembre" || "Noviembre":
        dias = "30 Días";
        break
      case "Febrero":
        dias = "28 o 29 Días";
        break
      default:
        dias = "error, no encuentro la palabra";
    }
    return dias;
}

function aprovacionNotas(nota){
    if(nota<4){
        return "Reprueba";
    }else if(nota>=4&&nota<7){
        return "Recuperatorio";
    }else{
        return "Aprueba";
    }
}

function abrirParacaidas(altura, velocidad){
    return altura>=2000 && altura<=3000 && velocidad<1000 ? "Abrir paracaidas" : "No se abre";
}

// ------ CASOS DE USO ------- //

console.log("");
console.log("Función puedeSubir:");
console.log(puedeSubir(145, false)); //true
console.log(puedeSubir(145, true)); //true
console.log(puedeSubir(130, true)); //true
console.log(puedeSubir(130, false)); //false
console.log(puedeSubir(115, true)); //false
console.log(puedeSubir(115, false)); //false
console.log(puedeSubir(210, true)); //false
console.log(puedeSubir(210, false)); //false

console.log("");
console.log("Función esPar:");
console.log(esPar(1)); //Impar
console.log(esPar(2)); //Par
console.log(esPar(10)); //Par
console.log(esPar(5)); //Impar
console.log(esPar(11)); //Impar
console.log(esPar(30)); //Par

console.log("");
console.log("Función realizoPago:");
console.log(realizoPago(true)); //Levantar
console.log(realizoPago(false)); //No Levantar

console.log("");
console.log("Función compRandom:");
console.log(compRandom(1)); 
console.log(compRandom(2)); 

console.log("");
console.log("Función esNavidad:");
console.log(esNavidad(24,12)); //NAVIDAD!!
console.log(esNavidad(12,11)); //No es navidad
console.log(esNavidad(2,5)); //No es navidad

console.log("");
console.log("Función diasMes:");
console.log(diasMes("Enero")); //31 Días
console.log(diasMes("Febrero")); //28 o 29 Días
console.log(diasMes("Abril")); //30 Días

console.log("");
console.log("Función aprovacionNotas:");
console.log(aprovacionNotas(3)); //Reprueba
console.log(aprovacionNotas(5)); //Recuperatorio
console.log(aprovacionNotas(7)); //Aprueba

console.log("");
console.log("Función abrirParacaidas:");
console.log(abrirParacaidas(1000,2000)); //Reprueba
console.log(abrirParacaidas(2000,700)); //Recuperatorio
console.log(abrirParacaidas(4000,900)); //Aprueba
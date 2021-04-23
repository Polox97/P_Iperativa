
let participante1 = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 23,
    listaPuntajes: [1,5,4,2,3,9],
    agregarPuntaje: function(puntaje){
        this.listaPuntajes.push(puntaje);
    },
    puntajePromedio: function(){
        let suma = 0;
        for(let i = 0; i<this.listaPuntajes.length; i++){
            suma += this.listaPuntajes[i];
        }
        return suma / this.listaPuntajes.length;
    }
}

let participante2 = {
    nombre: "Maria",
    apellido: "Perez",
    edad: 23,
    listaPuntajes: [1,7,4,2,6,4],
    agregarPuntaje: function(puntaje){
        this.listaPuntajes.push(puntaje);
    },
    puntajePromedio: function(){
        let suma = 0;
        for(let i = 0; i<this.listaPuntajes.length; i++){
            suma += this.listaPuntajes[i];
        }
        return suma / this.listaPuntajes.length;
    }
}

function competencia(par1, par2){
    if(par1.puntajePromedio > par2.puntajePromedio){
        return `${par1.nombre} ${par1.apellido} gana la competencia`
    }
    if(par1.puntajePromedio == par2.puntajePromedio){
        return "Empate";
    }
    else{
        return `${par2.nombre} ${par2.apellido} gana la competencia`
    }
}

console.log(competencia(participante1,participante2));
const {listaAlumnos, Alumno} = require("./alumno");

let curso = {
    nombre: 'JavaScript',
    notaAprov: 7,
    faltasMax: 4,
    listaAlumnos,
    agregarAlum: function(alumno){
        this.listaEst.push(alumno);
    },
    aprobar: function(alumno){
        if(alumno.faltas < this.faltasMax && alumno.promedio > this.notaAprov){
            return true;
        }
        else if(alumno.faltas == this.faltasMax && alumno.promedio > (this.notaAprov * 1.1)){
            return true;
        }
        else{
            return false;
        }
    },
    listaAprovados: function(){
        let resultado = [];
        for(let i = 0; i < this.listaAlumnos.length; i++){
            resultado.push(this.aprobar(this.listaAlumnos[i]));
        }
        return resultado;
    }
}

console.log(curso.listaAprovados());
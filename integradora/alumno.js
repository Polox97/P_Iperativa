
function Alumno(nombre, faltas, notas){
    this.nombre = nombre;
    this.faltas = faltas;
    this.notas = notas;
    this.promedio =function(){
        let suma = 0;
        for(let i = 0; i < this.notas.length; i++){
            suma += this.notas[i];
        }
        return suma / this.notas.length;
    };
    this.faltar = function(){
        return faltas + 1;
    }
}

let listaAlumnos = [
    new Alumno("leandro ezequiel", 5, [7,6,2,3,4]),
    new Alumno("Zoe Sobol", 3, [4,10,5,8,4]),
    new Alumno("Nicolas Lopez", 2, [8,9,4,7,1]),
    new Alumno("Nayla Saez", 1, [9,5,6,10,10]),
    new Alumno("Julieta Alfie", 7, [2,8,5,8,8])
]

module.exports = {listaAlumnos, Alumno};
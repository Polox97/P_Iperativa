let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
console.log(films[1]);

function mayus(array){
    let nuevoArray = [];
    nuevoArray[0] = array[0].toUpperCase();
    nuevoArray[1] = array[1].toUpperCase();
    nuevoArray[2] = array[2].toUpperCase();
    nuevoArray[3] = array[3].toUpperCase();
    nuevoArray[4] = array[4].toUpperCase();

    return nuevoArray;
}

console.log(mayus(films));

let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function agregar(){
    films.push(cartoons[0]);
    films.push(cartoons[1]);
    films.push(cartoons[2]);
    films.push(cartoons[3]);
    films.push(cartoons[4]);
}

agregar();

console.log(films);

films.pop();
console.log(films);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

function comparar(calificacion1, calificacion2){
    if(calificacion1 == calificacion2){
        return "Son iguales";
    }
    else{
        return "No son iguales";
    }
}

console.log(comparar(asiaScores[0], euroScores[0]));
console.log(comparar(asiaScores[1], euroScores[1]));
console.log(comparar(asiaScores[2], euroScores[2]));
console.log(comparar(asiaScores[3], euroScores[3]));
console.log(comparar(asiaScores[4], euroScores[4]));
console.log(comparar(asiaScores[5], euroScores[5]));
console.log(comparar(asiaScores[6], euroScores[6]));
console.log(comparar(asiaScores[7], euroScores[7]));
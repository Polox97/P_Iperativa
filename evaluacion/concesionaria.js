const autos = require("./autos");

const concesionaria = {
    autos,
    venderAuto: function(pat){
        let aut = this.buscarAuto(pat);
        aut.vendido = true;
    },
    buscarAuto: function(pat){
        for(let i=0; i<autos.length; i++){
            if(this.autos[i].patente === pat){
                return this.autos[i]
            }
        }
        return null;
    },
    autosParaLaVenta: function(){
        let enVenta = [];
        for(let i=0; i<autos.length; i++){
            if(this.autos[i].vendido === false){
                enVenta.push(this.autos[i]); 
            }
        }
        return enVenta;
    },
    autosNuevos: function(){
        let nuevos = [];
        let enVenta = this.autosParaLaVenta();
        for(let i=0; i<enVenta.length; i++){
            if(enVenta[i].km < 100){
                nuevos.push(enVenta[i]); 
            }
        }
        return nuevos;
    },
    listaDeVentas: function(){
        let precios = [];
        for(let i=0; i<this.autos.length; i++){
            if(this.autos[i].vendido === true){
                precios.push(this.autos[i].precio)
            }
        }
        return precios;
    },
    totalDeVentas: function(){
        let suma = 0;
        let precios = this.listaDeVentas();
        for(let i=0; i<precios.length; i++){
            suma += precios[i];
        }
        return suma;
    },
    puedeComprar: function(auto, persona){
        let capCuotas = auto.precio / auto.cuotas;
        if(auto.precio <= persona.capacidadDePagoTotal && capCuotas < persona.capacidadDePagoEnCuotas){
            return true;
        }
        else{
            return false;
        }
    },
    autosQuePuedeComprar: function(persona){
        let puede = [];
        let paraVenta = this.autosParaLaVenta();
        for(let i=0; i<paraVenta.length; i++){
            if(this.puedeComprar(paraVenta[i], persona) === true){
                puede.push(paraVenta[i])
            }
        }
        return puede;
    }
};

//console.log(concesionaria.autos);

//console.log(concesionaria.buscarAuto("APL122"));

concesionaria.venderAuto('APL123');
console.log(concesionaria.autos);
console.log(concesionaria.totalDeVentas());
import cipher from './cipher.js';

//Se declaran variables para contener valores del HTML
let claveTemporal = "";
let movimientos = 0;
let cifrar = document.getElementById("clavesita");


//Funcion para obtener los datos
function obtenerClave() {
    claveTemporal= document.getElementById("clavealfabetica").value;
    movimientos = document.getElementById("moves").value;
}


//Funcionalidad del boton cifrar
cifrar.onclick= function () {
    claveTemporal = document.getElementById('clavealfabetica').value
    movimientos = document.getElementById('moves').value
    let res = cipher.cifrar(claveTemporal);
    document.getElementById('claveCifrada').value = res
}

//Imprime en consola la funcion asignada
console.log(cipher);

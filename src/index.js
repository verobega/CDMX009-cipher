import cipher from './cipher.js';

let claveTemporal = "";
let movimientos = 0;
let cifrar = document.getElementById("clavesita");

function obtenerClave() {
    claveTemporal= document.getElementById("clavealfabetica").value;
    movimientos = document.getElementById("moves").value;
}

cifrar.onclick= function () {
    claveTemporal = document.getElementById('clavealfabetica').value
    movimientos = document.getElementById('moves').value
    let res = cipher.cifrar(claveTemporal);
    document.getElementById('claveCifrada').value = res
}

console.log(cipher);

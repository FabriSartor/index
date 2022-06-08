function preguntarNombreYApellido() {
    var nombre=prompt("ingrese su nombre");
    var apellido=prompt("ingrese su apellido");
    alert (`hola ${nombre} ${apellido}`); 
}
function mayus(){
    var datospersonales=document.getElementById("Datos");
    datospersonales.innerHTML="DATOS PERSONALES";
    datospersonales.style.backgroundColor="red";
}
function minus(){
    var datospersonales=document.getElementById("gatos");
    datospersonales.innerHTML="EDUCACION";
}
function colour1(){
    var oscuro=document.getElementById("oscuro");
    oscuro.style.backgroundColor="grey";
}
function colour2(){
    var oscuro=document.getElementById("oscuro");
    oscuro.style.backgroundColor="white";
}
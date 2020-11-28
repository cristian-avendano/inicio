let opcion = document.getElementById("opcion");
let centro = document.getElementById("centro");
let opciones = document.getElementById("opciones");


let m = false;

opcion.addEventListener('click', ()=>{
    mostrar();
})

function mostrar() {
    if (m) {
        opciones.style.transition="0.5s";
        opciones.style.marginTop="0px";
        centro.style.transition="0.5s";
        centro.style.width = "40px";
        m = false;
    } else {
        opciones.style.transition="0.5s";
        opciones.style.marginTop="80px";
        centro.style.transition="0.5s";
        centro.style.width = "30px";
        m = true;
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



//evento para el boton anadir
function agregarAmigo() {
    let amigoAAgregar = document.getElementById("amigo").value.trim();
    if (amigoAAgregar==="") {
        alert("campo invalido!");
    } else {
    amigos.push(amigoAAgregar);
    limpiarCaja(); 
    console.log(amigos);
    }
}
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";
}
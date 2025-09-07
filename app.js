// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


//escalabilidad y buena practica
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.textContent = texto;
    return;
}

asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');



function agregarAmigo() {
    let amigoAAgregar = document.getElementById("amigo").value.trim();
    if (amigoAAgregar==="") {
        alert("campo invalido!");
        return;
    }
//validar amigo a incluir
        if (amigos.includes(amigoAAgregar)) {
            alert("Este nombre ya esta incluido!");
            return;
        }    
            amigos.push(amigoAAgregar);
            listaEnPantalla();
            limpiarCaja();
            console.log(amigos);    
}



//muestra lista en pantalla
function listaEnPantalla() {
    let lista = document.getElementById("listaAmigos");
    //limpia la lista existente
    lista.innerHTML = "";

    for (let intentos=0; intentos < amigos.length; intentos++) {
        let crearLista=document.createElement("li");
        crearLista.textContent=amigos[intentos];
        lista.appendChild(crearLista);
    }
}



function limpiarCaja() {
    document.getElementById("amigo").value = "";
}



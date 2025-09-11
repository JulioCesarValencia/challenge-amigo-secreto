// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let lista="";

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
        //de lo contrario añadir
            amigos.push(amigoAAgregar);
            listaEnPantalla();
            limpiarCaja();
            console.log(amigos);    
}

//muestra lista en pantalla
function listaEnPantalla() {
    lista = document.getElementById("listaAmigos");
    //limpia la lista existente
    lista.innerHTML = "";

    for (let intentos=0; intentos < amigos.length; intentos++) {
        //crea el elemento "li"
        let crearLista=document.createElement("li");
        crearLista.textContent=amigos[intentos];
        //añadimos el elemento "li" al final de la etiqueta <ul>
        lista.appendChild(crearLista);
    }
}


function sortearAmigo() {
    if (amigos.length >= 2) {
        //busca el amigo aleatorio en base a las posiciones dentro del array
        let resultado = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[resultado];
        //hacemos la asignacion en el html
        let listaResultado=document.getElementById("resultado");
        listaResultado.innerHTML=`<li>Tu amigo secreto es ${amigoSecreto}</li>`;
        //borrar lista al mostrar el amigo secreto
        lista.innerHTML = "";
        //desactivamos el boton sortear amigos para que el usuario no pueda sobre-sortear
        document.querySelector(".button-draw").disabled = true;
        //desabilita el campo de entrada del nombre
        document.getElementById('amigo').disabled = true;
        //deshabilitamos boton añadir
        document.querySelector('.button-add').disabled = true;
        //activamos el boton nuevo juego
        document.getElementById('reiniciar').disabled = false;
    }
}        


function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function reiniciarJuego() {
    //limpia: array, lista en pantalla y el resultado
    amigos=[];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
    //habilitamos el boton añadir y el campo de texto para el usuario
    document.querySelector(".button-add").disabled = false;
    document.getElementById("amigo").disabled = false;
    //desbloqueamos el boton sortear amigos
    document.querySelector(".button-draw").disabled = false;
    //deshabilitamos el boton nuevo juego
    document.getElementById("reiniciar").disabled = false;
}




    
    




    



























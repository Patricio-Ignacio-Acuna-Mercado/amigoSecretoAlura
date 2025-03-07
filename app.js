// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


function agregarAmigo() {
    let nombreAmigoIngresado = document.getElementById('amigo').value;
    if (nombreAmigoIngresado === "") {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigoIngresado);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }
    
}


function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, agrega algunos nombres antes de sortear');
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${amigoSeleccionado}</li>`;
    }
}




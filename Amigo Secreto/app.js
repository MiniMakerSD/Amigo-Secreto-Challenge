let ListaAmigos = [];

function agregarAmigo() {
    let Amigo = document.querySelector('input').value;

    if (Amigo === "") { //*Aquí verificamos si el espacio está en blanco.*
        alert("Por favor, Inserte un nombre");
        return;
    } 
    //Si no...
    ListaAmigos.push(Amigo) //*Añadimos el valor de la variable Amigo al último lugar del arreglo ListaAmigos.*
    console.log(ListaAmigos); //*para comprobar...*
    document.querySelector('input').value = ""; //Limpiamos la caja de texto.*
    ActualizarLista(); //*Llamamos a la funcion ActualizarLista.*
}

function ActualizarLista() {
    let ul = document.getElementById("listaAmigos"); //Obtenemos la lista ul del index.html.*
    ul.innerHTML = ""; // *Aquí limpiamos la lista antes de actualizarla.*

    for (let Amigo of ListaAmigos) { //*Aquí recorremos cada nombre del array ListaAmigos.*
        let li = document.createElement("li"); //*Creamos un elemento li.*
        li.textContent = Amigo; //*Aquí, cada li tendrá el valor de la variable Amigo.*
        ul.appendChild(li); //*Por último, insertamos el li dentro del ul para que este pueda aparecer en la página.*
    }
}

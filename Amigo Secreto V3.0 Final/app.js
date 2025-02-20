let ListaAmigos = [];
let ul = document.getElementById("listaAmigos"); //Obtenemos la lista ul del index.html.*

function AgregarAmigo() {
    let Amigo = document.querySelector('input').value;

    if (Amigo === "") { //*Aquí verificamos si la caja de texto está en blanco o no.*
        alert("Por favor, inserte un nombre.");
        return;
    } 
    //Si no...
    ListaAmigos.push(Amigo) //*Añadimos el valor de la variable Amigo al último lugar del array ListaAmigos.*
    console.log(ListaAmigos); //*para comprobar...*
    document.querySelector('input').value = ""; //Limpiamos la caja de texto.*
    ActualizarLista(); //*Llamamos a la función ActualizarLista.*
}

function ActualizarLista() {
    ul.innerHTML = ""; // *Aquí limpiamos la lista antes de actualizarla.*
    //*Bucle for...*
    for (let Amigo of ListaAmigos) { //*Aquí recorremos cada nombre del array ListaAmigos.*
        let li = document.createElement("li"); //*Creamos un elemento li.*
        li.textContent = Amigo; //*Aquí, cada li tendrá el valor de la variable Amigo.*
        ul.appendChild(li); //*Por último, insertamos el li dentro del ul para que este pueda aparecer en la página.*
    }
}

function SortearAmigo() {
    if (ListaAmigos.length === 0) { //*Aquí verificamos si la lista está vacía o no.*
        alert("No hay nombres en la lista.");
        return;
    }
    let IndiceSorteado = Math.floor(Math.random()*ListaAmigos.length); //*Aquí se sortea un número random desde el 0 hasta el tamaño del array.*
    let AmigoSorteado = ListaAmigos[IndiceSorteado]; //*Aquí se añade a la variable nueva el nombre de la lista de amigos con el índice random obtenido.*
    console.log(AmigoSorteado); //*para comprobar...*
    document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${AmigoSorteado}!`; //*Aquí se muestra el amigo secreto sorteado en la página.*
    ul.innerHTML = ""; //*Aquí limpiamos la lista para que solamente se muestre el mensaje del amigo secreto sorteado en vez de la lista del array.*
}

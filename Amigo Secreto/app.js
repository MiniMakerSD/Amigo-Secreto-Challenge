let ListaAmigos = [];

function agregarAmigo() {
    let Amigo = document.querySelector('input').value;
    if (Amigo === "") {
        alert("Por favor, Inserte un nombre");
        return false;
    }
    ListaAmigos.push(Amigo)
    console.log(ListaAmigos);
    return true;
}

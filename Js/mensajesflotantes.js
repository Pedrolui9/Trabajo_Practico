function mensajeFlotante(opcion) {
    const mensajeDiv = document.getElementById("mensajes");
    const listaMensajes = {
        "opcion1": "CONECTE OTRO DUAL SOCHK",
        "opcion2": "NO SE ENCONTRARON PARTIDAS GUARDADAS",
        "opcion3": "AUN NO SE DESBLOQUEO CONTENIDO JUGABLE"
    };
    if (opcion === "") {
        mensajeDiv.style.display = "none";
        return;
    }
    if (mensajeDiv.style.display === "block" && mensajeDiv.innerText === listaMensajes[opcion]) {
        mensajeDiv.style.display = "none";
    } else {
        mensajeDiv.innerText = listaMensajes[opcion]
        mensajeDiv.style.display = "block";
    }
}


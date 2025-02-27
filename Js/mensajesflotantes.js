function mostrarMensaje(opcion) {
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";
    if (opcion === 1) {
        mensaje.textContent = "CONECTE OTRO DUAL SHOCK";
        mensaje.style.display = "block";
    } else if (opcion === 2) {
        mensaje.textContent = "NO SE ENCONTRO UNA PARTIDAD GUARDADA";
        mensaje.style.display = "block";
    } else if (opcion === 3) {
        mensaje.textContent = "AUN NO DESBLOQUEA CONTENIDO JUGABLE";
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
       
    }
    
}

     


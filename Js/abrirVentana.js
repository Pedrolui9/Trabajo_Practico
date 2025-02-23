function abrirVentana() {
    let ventana= document.getElementById("v_flotante");
    let video= document.getElementById("video")
    ventana.style.display = "flex";
    video.play()
    
}

function cerrarVentana() {
    let ventana= document.getElementById("v_flotante");
    let video= document.getElementById("video")
    ventana.style.display = "none";
    video.pause()
    video.currentTime = 0 ;
    
}
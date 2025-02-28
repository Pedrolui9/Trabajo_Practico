document.addEventListener("DOMContentLoaded", function() {
    eventos() ;
    eventos2();
    reproSong();
});


function eventos() {


    document.getElementById("musicaFondo").addEventListener("change", function() {
        const audio = document.getElementById("audio");
        if (this.checked) {
            audio.play();
            console.log("checkeado");
        }
        else {
            audio.pause();
            
        }

    });
}

//no lo intenten en casa
//funcion que contiene otra funcion (apagar y prender sonido del menu)
let musicaActiva = false; 

function reproSong() {
    const sonido = document.getElementById("sonido");

    if (!musicaActiva) return; 
    if (sonido) {
        sonido.currentTime = 0;
        sonido.play();
}}

function eventos2() {

    document.getElementById("sonidoFondo").addEventListener("change", function() {
         
        if (this.checked) {
            musicaActiva = true;
            console.log("Música de fondo activada");
        } else {
            musicaActiva = false;
            console.log("Música de fondo desactivada");
        }
    });

}

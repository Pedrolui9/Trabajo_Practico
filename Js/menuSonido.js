// principal
document.addEventListener("DOMContentLoaded", function() {
    eventos();
});


function eventos() {

    // sonido de fondo con checkbox
    document.getElementById("sonidoFondo").addEventListener("change", function() {
        const audio = document.getElementById("audio");
        if (this.checked) {
            audio.play();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
        }

    });
}

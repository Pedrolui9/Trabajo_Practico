// principal
document.addEventListener("DOMContentLoaded", function() {
    eventos();
});

function toggleSound() {
    const audio = document.getElementById("audio");
    const button = document.getElementById("toggleButton");
    if (audio.paused) {
        audio.play();
        button.textContent = "🔇 Apagar sonido";
    } else {
        audio.pause();
        button.textContent = "🔊 Encender sonido";
    }
}


function eventos() {
    document.getElementById("toggleButton").addEventListener("click", toggleSound);
}

const audio = document.getElementById("audio");
const button = document.getElementById("toggleButton");

function toggleSound() {
    if (audio.paused) {
         audio.play();
         button.textContent = "🔇 Apagar sonido";
     } 
    else {
        audio.pause();
         button.textContent = "🔊 Encender sonido";
     }
     
}

 button.addEventListener("click", toggleSound);

 
 document.addEventListener("DOMContentLoaded", function() {
    const boton = document.addEventListener("musicaFondo");
 
    const audio = document.addEventListener("audio");

 
    boton.addEventListener("change", function() {
 
        if (this.checked) {
            audio.play();
        } 
        else {
            audio.pause();
            audio.currentTime = 0;
        }
     } )}); 
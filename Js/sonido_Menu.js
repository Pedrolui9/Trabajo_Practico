// const audio = document.getElementById("audio");
// const button = document.getElementById("toggleButton");

// function toggleSound() {
//     if (audio.paused) {
//          audio.play();
//          button.textContent = "🔇 Apagar sonido";
//      } 
//     else {
//         audio.pause();
//          button.textContent = "🔊 Encender sonido";
//      }
     
// }

//  button.addEventListener("click", toggleSound);

const musicaDeMenu =  document.getElementById("musicaFondo");
const musicamp4 = document.getElementById("audio");

musicaDeMenu.addEventListener( function() {
    if (this.checked) {
        musicaDeMenu.play();}
    else {
        musicaDeMenu.pause();
        musicaDeMenu.curretTime = 0;
    }
})
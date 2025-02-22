 const audio = document.getElementById("audio");
        const button = document.getElementById("toggleButton");

        function toggleSound() {
            if (audio.paused) {
                audio.play();
                button.textContent = "🔇 Apagar sonido";
            } else {
                audio.pause();
                button.textContent = "🔊 Encender sonido";
            }
        }

        button.addEventListener("click", toggleSound);
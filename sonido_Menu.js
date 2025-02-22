 const audio = document.getElementById("audio");
        const button = document.getElementById("toggleButton");

        window.onload = () => {
            audio.play().catch(error => console.log("Reproducción automática bloqueada"));
            button.textContent = "🔇 Apagar sonido";
        };

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
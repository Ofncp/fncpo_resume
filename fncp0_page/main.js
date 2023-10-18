var typed= new Typed(".text", {
          strings:["Happy Here..", "Sad Leaving..",
           "Creating Awesomeness..", "Remembering You!"],
          typeSpeed:100,
          backSpeed:100,
          backDelay:1000,
          loop: true
    });



// for music background


  const backgroundMusic = document.getElementById("backgroundMusic");
        const musicToggleButton = document.getElementById("musicToggleButton");

        // Function to toggle music playback and button text
        function toggleMusic() {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicToggleButton.textContent = "Pause Music";
            } else {
                backgroundMusic.pause();
                musicToggleButton.textContent = "Play Music";
            }
        }

        // Auto play music when the page loads
        window.addEventListener("load", () => {
            backgroundMusic.play();
        });

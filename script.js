document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const card = document.getElementById("card");
  const musicToggle = document.getElementById("music-toggle");
  const backgroundMusic = document.getElementById("background-music");

  // Toggle envelope opening
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
    setTimeout(() => {
      card.classList.add("show");
    }, 500); // Delay to sync with the envelope animation
  });

  // Flip card to back
  card.addEventListener("click", () => {
    card.classList.toggle("flipped"); // Flip the card
  });  

  // Toggle background music
  let musicPlaying = false;
  musicToggle.addEventListener("click", () => {
    if (musicPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    musicPlaying = !musicPlaying;
  });
});

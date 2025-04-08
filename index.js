const images = [
    "./image/chicken.png",
    "./image/crayfish.jpg",
    "./image/fish.jpg",
    "./image/korlang.avif",
    "./image/tiger.jpg",
    "./image/krabbe.jpg"
  ];
  
  let countdownTime = 3;

  function startCountdown() {
    const countdownDisplay = document.getElementById("countdown");
    const img = document.getElementById("randomImage");
    img.style.display = "none"; // Hide image while counting down

    let timeLeft = countdownTime;
    countdownDisplay.textContent = `Get ready... ${timeLeft}s`;

    const interval = setInterval(() => {
      timeLeft--;
      countdownDisplay.textContent = `Get ready... ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(interval);
        showRandomImage();
        countdownDisplay.textContent = "";
      }
    }, 1000);
  }

  startCountdown()

 function showRandomImage() {
      const imageContainer = document.getElementById('image-container');
      imageContainer.innerHTML = 'Loading...';


      timeInfo.textContent = countdownTime;
      const startTime = Date.now();
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const img = document.createElement('img');
        img.src = images[randomIndex];
        img.alt = 'Random Image';
        const endTime = Date.now();
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        const elapsedSeconds = ((endTime - startTime) / 1000).toFixed(2);
        timeInfo.textContent = `Image loaded in ${elapsedSeconds} seconds.`;
      }, 3000); // 1000ms = 1 second delay
    }
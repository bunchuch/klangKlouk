const images = [
    "./image/chicken.png",
    "./image/crayfish.jpg",
    "./image/fish.jpg",
    "./image/khlouk.avif",
    "./image/tiger.jpg",
    "./image/krabbe.jpg"
  ];
  
const img = document.getElementById('image')
img.src = './image/khla_khlouk.png'


 function showRandomImage() {
      const imageContainer = document.getElementById('image-container');
      const timeinfo = document.getElementById('timeInfo');
      const countdown = document.getElementById('countdown')
      const startTime = Date.now();
      
      const delaySeconds = 10;

      img.src = './image/loading.gif'

      let remaining = delaySeconds;
      countdown.textContent = ` ${remaining}`;

      const interval = setInterval(() => {
        remaining--;
        if (remaining > 0) {
          countdown.textContent = ` ${remaining}`;
        } else {
          clearInterval(interval);
          countdown.textContent = ''; // clear countdown text
        }
      }, 1000);

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        // const img = document.createElement('img');
        img.src = images[randomIndex];
        img.alt = 'Random Image';
        const endTime = Date.now();
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        const elapsedSeconds = ((endTime - startTime) / 1000).toFixed(2);
       tim.textContent = `Image loaded in ${elapsedSeconds} seconds.`;
      }, 10000); // 1000ms = 1 second delay
    }
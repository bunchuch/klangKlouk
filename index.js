const images = [
    {
        name : "មាន់",
        image:  "./image/chicken.jpg",
    },
    {
        name : "បង្ករ",
        image: "./image/crayfish2.jpg",
    },
    {
        name : "ត្រី",
        image: "./image/fish3.jpg",
    },
    {
        name : "ឃ្លោក",
        image: "./image/khlouk.jpg",
    },
    {
        name : "ខ្លា",
        image: "./image/tiger2.jpg",
    },
     {
        name : "ក្ដាម",
        image: "./image/krabbe2.jpg"
    },
   
  ];
  
const img = document.getElementById('image');
img.src = './image/khla_khlouk.png'
const loadingImage = document.getElementById('loadingImage');
const imageContainer = document.getElementById('image-container');
const timeinfo = document.getElementById('timeInfo');
const displayCountdown = document.getElementById('countdown')
const showName = document.getElementById('showName')
const imageCountInput = document.getElementById('imageCount');
const timeCountInput = document.getElementById('timeCount');
const buttonStart = document.getElementById('startBtn');


//random image
function getRandomImages(count){
  const selectedImages = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * images.length);
    selectedImages.push(images[index]);
  }
  return selectedImages;
  //no allow duplicate
  // const shuffled = [...images].sort(()=> 0.5 - Math.random());
  // return shuffled.slice(0 ,count)
}


function startBtn(){
  playSound("./sound/startSound.mp3")
  const count = parseInt(imageCountInput.value);
  const time = parseInt(timeCountInput.value);
  buttonStart.disabled = true;
  img.src = "./image/loading2.gif"
  if (count < 1 || count > images.length) {
    alert(`Please enter a number between 1 and ${images.length}`);
    return;
  }

  //imageContainer.innerHTML = '';
  displayCountdown.textContent = `${time}`;

  let timer = time;
  const interval = setInterval(() => {
    timer--;
    displayCountdown.textContent = `${timer}`;
    if (timer <= 0) {
      clearInterval(interval);
      img.src = "./image/cat-dance.gif"
      playSound("./sound/cheering.mp3")
      displayCountdown.textContent = "🎉🎊";
      const randomImages = getRandomImages(count);
      renderImages(randomImages);
      loadingImage.src = ""
      buttonStart.disabled = false;
    }
  }, 1000);

buttonStart.disabled = false;
      //img.src = "./image/khla_khlouk.png"

}


function renderImages(images){
  imageContainer.innerHTML = '';
  images.forEach(image => {
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.style.display = 'block';
    wrapper.style.textAlign = 'center';
    wrapper.style.margin = '14px';

    // Create image
    const img = document.createElement('img');
    img.src = image.image;
    img.width = 70;
    img.height = 70;
    img.style.borderRadius = '8px';
    img.style.border = '1px solid #ccc';
   // img.style.display = 'block';
    img.style.marginBottom = '5px';

    // Create title
    const title = document.createElement('p');
    title.textContent = image.name;
    title.style.margin = '0';
    title.style.fontSize = '16px';

    // Append image and title to wrapper
    wrapper.appendChild(img);
    wrapper.appendChild(title);

    // Append wrapper to container
    imageContainer.appendChild(wrapper);
  });
}

function playSound(sound) {
  const audio = document.getElementById('sound');
  audio.src = sound
  audio.currentTime = 0
  audio.play()
}



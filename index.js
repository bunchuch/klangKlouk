const images = [
    {
        name : "មាន់",
        image:  "./image/chicken.png",
    },
    {
        name : "បង្ករ",
        image: "./image/crayfish.jpg",
    },
    {
        name : "ត្រី",
        image: "./image/fish.jpg",
    },
    {
        name : "ឃ្លោក",
        image: "./image/khlouk.avif",
    },
    {
        name : "ខ្លា",
        image: "./image/tiger.jpg",
    },
     {
        name : "ក្ដាម",
        image: "./image/krabbe.jpg"
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
function getRandomImages(count){
  const shuffled = [...images].sort(()=> 0.5 - Math.random());
  return shuffled.slice(0 ,count)
}


function startBtn(){
  const count = parseInt(imageCountInput.value);
  const time = parseInt(timeCountInput.value);
  buttonStart.disabled = true;
  img.src = "./image/loading.gif"
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
      img.src = "./image/khla_khlouk.png"
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
    wrapper.style.display = 'inline-block';
    wrapper.style.textAlign = 'center';
    wrapper.style.margin = '10px';

    // Create image
    const img = document.createElement('img');
    img.src = image.image;
    img.width = 90;
    img.height = 90;
    img.style.borderRadius = '8px';
    img.style.border = '1px solid #ccc';
    img.style.display = 'block';
    img.style.marginBottom = '5px';

    // Create title
    const title = document.createElement('p');
    title.textContent = image.name;
    title.style.margin = '0';
    title.style.fontSize = '14px';

    // Append image and title to wrapper
    wrapper.appendChild(img);
    wrapper.appendChild(title);

    // Append wrapper to container
    imageContainer.appendChild(wrapper);
  });
}





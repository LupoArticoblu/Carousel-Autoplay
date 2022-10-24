const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

for(let i = 1; i <= numImages; i++){
  sliderHtml += `
      <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  thumbsHtml += `
      <img  class="item-thumb" src="img/0${i}.jpg" alt="">
  `;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');


/*const output = document.querySelector('.output');

let countDown = 5;

setTimeout(function() {
  clearInterval(clock);
}, (countDown + 1) * 1000);


const clock = setInterval(function() {
  countDown--;
  // if (countDown < 0) countDown = 0;
  printOutput(countDown);
  // if(countDown === 0) {
  //   clearInterval(clock);
  // }
}, 1000);






printOutput(countDown);*/

//non funzionante
let countDown = 3;

const change = setInterval(function() {
  if(countDown === counterImages){
    counterImages++;
  }
},3000);



prev.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages++;
  if(counterImages === numImages) counterImages = 0;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})
next.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages--;
  if(counterImages < 0) counterImages = numImages - 1;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})
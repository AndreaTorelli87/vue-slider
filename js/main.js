const { createApp } = Vue

createApp({
   data() {
      return {
         index: 0,
         images: [
                  'img/1.webp',
                  'img/2.webp',
                  'img/3.webp',
                  'img/4.webp',
                  'img/5.webp',
         ],
         titles: [
                  'Marvel\'s Spiderman Miles Morale',
                  'Ratchet & Clank: Rift Apart',
                  'Fortnite',
                  'Stray',
                  "Marvel's Avengers"
         ],
         texts: [
                  'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                  'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                  "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                  'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                  'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
         ]
      }
   },
   methods: {
      prevImage() {
         this.index--
         if (this.index < 0){
            this.index = this.images.length - 1;
         }
      },
      nextImage() {
         this.index++;
         if (this.index == this.images.length){
            this.index = 0;
         }
      },
      selectImage(indice) {
         this.index = indice;
      }
   }
}).mount('#app')

/*
//creo array con oggetti da inserire nel carousel
const images = [
   {
       image: 'img/1.webp',
       title: 'Marvel\'s Spiderman Miles Morale',
       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   }, {
       image: 'img/2.webp',
       title: 'Ratchet & Clank: Rift Apart',
       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   }, {
       image: 'img/3.webp',
       title: 'Fortnite',
       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   }, {
       image: 'img/4.webp',
       title: 'Stray',
       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   }, {
       image: 'img/5.webp',
       title: "Marvel's Avengers",
       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

//dichiaro le destinazioni delle oggetti
const imagesDom = document.getElementById("images");
const thumbnailsDom = document.getElementById("thumbnails");

let sliderContent = "";
let thumbnailsContent = "";

//ciclo per creare diversi div con stesse caratteristiche
for (let i = 0; i < images.length; i++) {
   const elemento = images[i];
   const addImageWrapper = 
      `<div class="image-wrapper h-100 hide text-white text-end position-relative">
         <img class="image w-100 h-100 object-fit-cover" src="${elemento["image"]}">
         <div id="scritte" class="rounded-3 p-2 m-3">
            <h2 class="fw-bolder">${elemento["title"]}</h2>
            <p>${elemento["text"]}</p>
         </div>
      </div>`;
   const addDivThumbnails = 
      `<div id="thumbnail${i}" class="thumbnail-wrapper brightness">
         <img class="image w-100 h-100 object-fit-cover" src="${elemento["image"]}">
      </div>`
   sliderContent += addImageWrapper;
   thumbnailsContent += addDivThumbnails;
}

//inserisco i div appena creati
imagesDom.innerHTML = sliderContent;
thumbnailsDom.innerHTML = thumbnailsContent;

//assegno le classi ai div
const addImageWrapperDom = document.getElementsByClassName("image-wrapper h-100 hide");
const thumbnail = document.getElementsByClassName("thumbnail-wrapper");

//setto l'immagine iniziale
let currentImage = 0;

//aggiungi visibilità al div corrente
addImageWrapperDom[currentImage].classList.add("show");
thumbnail[currentImage].classList.remove("brightness");

for (let i = 0; i < images.length; i++) {

   const pippo = document.getElementById(`thumbnail${i}`);

   pippo.addEventListener("click", //"mouseover"
      function(){
         
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage = i;
         addImageWrapperDom[currentImage].classList.add("show");
         thumbnail[currentImage].classList.remove("brightness");
      }
   )
}

const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");
const leftDom = document.getElementById("left");
const rightDom = document.getElementById("right");
const stopDom = document.getElementById("stop");

let prevImgTimer;
let nextImgTimer;

nextDom.addEventListener("click",nextImg);
prevDom.addEventListener("click",prevImg);
leftDom.addEventListener("click", function() {prevImgTimer = setInterval(prevImg,3000);});
rightDom.addEventListener("click", function() {nextImgTimer = setInterval(nextImg,3000);});
stopDom.addEventListener("click",stopImg);


function stopImg() {clearInterval(prevImgTimer);clearInterval(nextImgTimer) };

function nextImg() {

   if (currentImage < addImageWrapperDom.length - 1) {
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage++;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   } else {
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 0;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
}

function prevImg() {

   if (currentImage > 0) {
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage--;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   } 
   else {
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = addImageWrapperDom.length - 1;
      addImageWrapperDom[currentImage].classList.add("show");  
      thumbnail[currentImage].classList.remove("brightness");
   }  
}

//migliora le 2 funzioni sopra con altre sotto funzioni

*/
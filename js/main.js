const { createApp } = Vue

createApp({
   data() {
      return {
         variabileDiAppoggio: 0,
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
      },
      nextImgTimer() {
         this.variabileDiAppoggio = setInterval(this.nextImage,3000);
      },
      stopImg() {
         clearInterval(this.variabileDiAppoggio);
      }
   },
   mounted() {
      this.nextImgTimer();
   }
}).mount('#app')
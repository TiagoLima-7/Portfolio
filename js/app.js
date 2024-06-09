import { imageData } from './imageData.js';
// HORIZONTAL SCROLL
document.addEventListener("DOMContentLoaded", function() {


  /**********************************************************LOADER**************************************************************/
  
  let loader = document.querySelector(".loader");
  let loaderTimeout = document.querySelector("#loader_bar")
  
  function closeLoader() {
     loader.classList.add("close");
      setTimeout(() =>{
          loader.style.display = "none";
      }, 1500)
  }
  
  function loaderBar() {
      loaderTimeout.classList.add("shrink");
  }
  
  setTimeout(() => {
      closeLoader()
  }, 7000);
  
  setTimeout(() =>{
      loaderBar()
  },0);
  
/***************************************************LANGUAGE SELECTOR*************************************************** */

const selectLanguage = document.querySelector("#language");

selectLanguage.addEventListener('change', function() {
  const lang = selectLanguage.value;
  // console.log("langue sélectionnée: " + lang);
  // console.log("ancienne langue: " + document.documentElement.lang);

  // Mettre à jour la langue du document HTML
  document.documentElement.lang = lang;
  // console.log("nouvelle langue sélectionnée: " + document.documentElement.lang);

  // Appliquer la logique de cas pour cacher ou afficher certains éléments
  switch (lang) {
    case 'en':
      // Cacher les éléments français et portugais, afficher les éléments anglais
      document.querySelectorAll('.en').forEach(element => element.style.display = 'block');
      document.querySelectorAll('.fr, .pt').forEach(element => element.style.display = 'none');
      break;
    case 'fr':
      // Cacher les éléments anglais et portugais, afficher les éléments français
      document.querySelectorAll('.fr').forEach(element => element.style.display = 'block');
      document.querySelectorAll('.en, .pt').forEach(element => element.style.display = 'none');
      break;
    case 'pt':
      // Cacher les éléments anglais et français, afficher les éléments portugais
      document.querySelectorAll('.pt').forEach(element => element.style.display = 'block');
      document.querySelectorAll('.en, .fr').forEach(element => element.style.display = 'none');
      break;
    default:
      // Si la langue n'est pas reconnue, afficher tous les éléments
      document.querySelectorAll('.en, .fr, .pt').forEach(element => element.style.display = 'block');
  }
});

// Initialiser l'affichage en fonction de la langue actuelle
switch (document.documentElement.lang) {
  case 'en':
    document.querySelectorAll('.en').forEach(element => element.style.display = 'block');
    document.querySelectorAll('.fr, .pt').forEach(element => element.style.display = 'none');
    break;
  case 'fr':
    document.querySelectorAll('.fr').forEach(element => element.style.display = 'block');
    document.querySelectorAll('.en, .pt').forEach(element => element.style.display = 'none');
    break;
  case 'pt':
    document.querySelectorAll('.pt').forEach(element => element.style.display = 'block');
    document.querySelectorAll('.en, .fr').forEach(element => element.style.display = 'none');
    break;
  default:
    document.querySelectorAll('.en, .fr, .pt').forEach(element => element.style.display = 'block');
}


  /*********************************************************PARTICLES IMAGE********************************************************* */
  // // Load Canvas Background image
  // const myImage = new Image();
  // myImage.src = imageData;
    
  // myImage.addEventListener('load', function() {
  //     const canvas = document.querySelector("#canvas");
  //     const ctx = canvas.getContext('2d');
  //     canvas.width = 519;
  //     canvas.height = 690;
      
  //     ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);      //EMPLACEMENT ORIGINAL DE DRAWIMAGE()
  //     const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);               //REMOTION IMAGE DE FOND
      
  //     //Création d'un array vide de particules
  //     let particlesArray = [];
  //     const numberOfParticles = 5000;
  
  //     let mappedImage = [];
  //     let cellBrightness;
  //     for (let y = 0; y < canvas.height; y++){
  //         let row =[];
  //         for (let x = 0; x < canvas.width; x++) {
  //             const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
  //             const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
  //             const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
  //             const brightness = calculateRelativeBrightness(red, green, blue);
  //             const cell = [
  //                 cellBrightness = brightness,
  //             ];
  //             row.push(cell);
  //         }
  //         mappedImage.push(row);
  //     }
  // //Ajustement de la luminosité pour l'oeil humain
  //     function calculateRelativeBrightness (red, green, blue){
  //         return Math.sqrt(
  //             (red * red) * 0.299 +
  //             (green * green) * 0.587 +
  //             (blue * blue) * 0.114
  //         ) / 100
  //     }
  
  
  //     class Particle {
  //         constructor(){
  //             this.x = Math.random() * canvas.width;
  //             this.y = 0;
  //             this.speed = 0;
  //             this.velocity = Math.random() * 0.5;
  //             this.size = Math.random() * 1.5 + 1;
  //             this.position1 = Math.floor(this.y);
  //             this.position2 = Math.floor(this.x);
  //         }
  
  //         update(){
  //             this.position1 = Math.floor(this.y);
  //             this.position2 = Math.floor(this.x);
  //             this.speed = mappedImage[this.position1][this.position2][0];
  //             let movement = (2.5 - this.speed) + this.velocity;
  
  //             this.y += movement;
  //             if( this.y >= canvas.height){
  //                 this.y = 0;
  //                 this.x = Math.random() * canvas.width;
  //             }
  //         }
  //         draw(){
  //             let color = `rgb(${pixels.data[(this.position1 * 4 * pixels.width) + (this.position2 * 4)]}, ${pixels.data[(this.position1 * 4 * pixels.width) + (this.position2 * 4 + 1)]}, ${pixels.data[(this.position1 * 4 * pixels.width) + (this.position2 * 4 + 2)]})`;
  //             //let color = `white`;
          
  //             ctx.beginPath();
  //             ctx.fillStyle = color; // Utiliser la couleur extraite de l'image
  //             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //             ctx.fill();
  //         }
  //     }
  //     function init(){
  //         for(let i = 0; i < numberOfParticles; i++){
  //             particlesArray.push(new Particle);
  //         }
  //     }
  //     init();
  //     function animate(){
  //         // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);    //POUR AVOIR L'IMAGE DE FOND AU MEME TEMPS
  //         ctx.globalAlpha = 0.05;
  //         ctx.fillStyle = 'rgb(0, 0, 0)';
  //         ctx.fillRect(0, 0, canvas.width, canvas.height);
  //         ctx.globalAlpha = 0.2;
  //         for (let i = 0; i < particlesArray.length; i++){
  //             particlesArray[i].update();
  //             ctx.globalAlpha = particlesArray[i].speed / 8;
  //             particlesArray[i].draw();
  //         }
  //         requestAnimationFrame(animate);
  //     }
  //     animate();
  // })


  /***************************************************WORKING CANVAS IMAGE MANIPULATION************************************************* */

  // const canvas = document.getElementById('canvas');
  // const ctx = canvas.getContext('2d');
  // canvas.width = 600;
  // canvas.height = 740;

  // setTimeout(() => {
  //   class Cell {
  //   constructor(effect, x, y, index) {
  //     this.effect = effect;
  //     this.x = x;
  //     this.y = y;
  //     this.index = index;
  //     this.positionX = this.effect.width * 0.5;
  //     this.positionY = this.effect.height * 0.5;
  //     this.speedX;
  //     this.speedY;
  //     this.width = this.effect.cellWidth;
  //     this.height = this.effect.cellHeight;
  //     this.image = document.getElementById('heroImage');
  //     this.slideX = 0;
  //     this.slideY = 0;
  //     this.vx = 0; //velocity on x axis
  //     this.vy = 0; //velocity on y axis
  //     this.ease = 0.01;
  //     this.friction = 0.9; 
  //     this.randomize = Math.random() * 50 + 2;
  //     setTimeout(() => {
  //       this.start();
  //     }, this.index * 10);
  //   }
  //   draw(context){
  //     // context.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  //     context.drawImage(this.image, this.x + this.slideX, this.y + this.slideY, this.width, this.height, this.positionX, this.positionY, this.width, this.height)
  //     //context.strokeRect(this.positionX, this.positionY, this.width, this.height)
  //   }
  //   start(){
  //     this.speedX = (this.x - this.positionX)/this.randomize;
  //     this.speedY = (this.y - this.positionY)/this.randomize;
  //   }
  //   update() {
  //     // Cell Position
  //     if(Math.abs(this.speedX) > 0.005 || Math.abs(this.speedY) > 0.005) {
  //       this.speedX = (this.x - this.positionX)/this.randomize;
  //       this.speedY = (this.y - this.positionY)/this.randomize;
  //       this.positionX += this.speedX;
  //       this.positionY += this.speedY;
  //       // console.log(this.index)
  //     }
      
  //     //Crop
  //     const dx = this.effect.mouse.x - this.x;
  //     const dy = this.effect.mouse.y - this.y;
  //     //const distance = Math.sqrt(dx * dx + dy * dy) // Theoreme de Pitagore
  //     const distance = Math.hypot(dx, dy); // Theoreme de Pitagore
      
  //     if(distance < this.effect.mouse.radius) {
  //       const angle =Math.atan2(dy, dx);
  //       const force = distance / this.effect.mouse.radius;
  //       this.vx = force * Math.sin(angle);
  //       this.vy = force * Math.cos(angle);
  //     }
  //     this.slideX += (this.vx *= this.friction) - this.slideX * this.ease;
  //     this.slideY -= (this.vy *= this.friction) + this.slideY * this.ease;
  //   }
  // }

  // class Effect {
  //   constructor(canvas){
  //     this.canvas = canvas;
  //     this.width = this.canvas.width;
  //     this.height = this.canvas.height;
  //     this.cellWidth = this.width / 15;
  //     this.cellHeight = this.height / 30;
  //     this.cell = new Cell(this, 0, 0);
  //     this.imageGrid = [];
  //     this.createGrid();
  //     // console.log(this.imageGrid)
  //     this.mouse = {
  //       x: undefined,
  //       y: undefined,
  //       radius: 100
  //     }
  //     this.canvas.addEventListener('mousemove', e => {
  //       this.mouse.x = e.offsetX;
  //       this.mouse.y = e.offsetY;
  //       // console.log(this.mouse.x)
  //     })
  //     this.canvas.addEventListener('mouseleave', e => {
  //       this.mouse.x = undefined;
  //       this.mouse.y = undefined;
  //       // console.log(this.mouse.x)
  //     })
  //   }
  //   createGrid(){
  //     let index = 0;
  //     for (let y = 0; y < this.height; y+=this.cellHeight){
  //       for (let x = 0; x < this.width; x+=this.cellWidth){
  //         index++;
  //         this.imageGrid.unshift(new Cell(this, x, y, index));
  //       }
  //     }
  //   }
  //   render(context){

  //     this.imageGrid.forEach((cell, i) => {
  //       cell.update()
  //       cell.draw(context);
  //     })
  //   }
  // }

  // const effect = new Effect(canvas);
  // // console.log(effect);
  
  // function animate() {    
  //   effect.render(ctx);
  //   requestAnimationFrame(animate);
  // }

  // requestAnimationFrame(animate);
  // }, 4000);
  
/***************************************************CANVAS PIXEL MANIPULATION********************************************************************* */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 740;
setTimeout(() => {
//Handle individual particles
class Particle {
  constructor(effect, x, y, color){
    this.effect = effect;                             //Points to Effect Class
    this.x = Math.random() * this.effect.width;       //Position X
    this.y = Math.random() * this.effect.height;      //Position Y
    this.originX = Math.floor(x);                     //Position X d'origine
    this.originY = Math.floor(y);                     //Position Y d'origine
    this.size = 3;                                    //Size
    this.vx = 0;                                      //Horizontal Speed
    this.vy = 0;                                      //Vertical Speed
    this.color = color;                               //original color for each individual particle
    this.ease = 0.35;
    this.friction = 0.98;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
  }
  draw(context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.size, this.size)
  }
  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;

    this.distance = Math.hypot(this.dx, this.dy);
    // console.log(this.distance)
    this.force = this.effect.mouse.radius / this.distance;

    if(this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx -= this.force * Math.cos(this.angle);
      this.vy -= this.force * Math.sin(this.angle);
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }
}

//Handles every particles effects
class Effect{
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particlesArray = [];
    this.image = document.getElementById("heroImage");
    // this.image = imageData;
    this.centerX = this.width * 0.5;
    this.centerY = this.height * 0.5;
    this.x = this.centerX - this.image.width * 0.5;
    this.y = this.centerY - this.image.height * 0.5;
    this.gap = 5;
    this.mouse = {
      radius: 100,
      x: undefined,
      y: undefined
    }
    canvas.addEventListener('mousemove', event => {
      this.mouse.x = event.offsetX;
      this.mouse.y = event.offsetY;
      this.mouse.y = event.offsetY;
      })

    canvas.addEventListener('mouseleave', event => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    })
  }

  init(context) {
    context.drawImage(this.image, this.x, this.y);  //Draw image in canvas
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;    //Analise Image

    for (let y = 0; y < this.height; y+=this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

        if(alpha > 0) {     //Pixel is not transparent
          this.particlesArray.push(new Particle(this, x, y, color));
        }
      }
    }
  }
  draw(context){
    this.particlesArray.forEach(particle => particle.draw(context));
  }
  update() {
    this.particlesArray.forEach(particle => particle.update());

  }
}

const effect = new Effect(canvas.width, canvas.height);
effect.init(ctx);
// console.log(effect.particlesArray)

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  effect.draw(ctx);
  effect.update();
  requestAnimationFrame(animate);
}
animate();

}, 2000);


/************************************************************************************************************************* */

// ANIME JS HERO-SENTENCE ANIMATION
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


/************************************************************************************************************************************************* */


/**BACKGROUND ANIMATION */

    const blockSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;
    const backgroundContainer = document.querySelectorAll('.background');  

    function createBlocks(){
        backgroundContainer.forEach((background) =>{
            for (let i = 0; i < numBlocks; i++) {
                const block = document.createElement('div');
                block.classList.add("background-block");
                block.dataset.index = i;
                block.addEventListener("mousemove", highlightCarresVoisins);
                background.appendChild(block);
            }  
        })
        
    };
    
    function highlightCarresVoisins() {
        const index = parseInt(this.dataset.index);
        const voisins = [
            index - 1,
            index + 1,
            index - numCols,
            index + numCols,
            index - numCols - 1,
            index - numCols + 1,
            index + numCols - 1,
            index + numCols + 1
        ].filter(
            (i) =>
            i >= 0 &&
            i < numBlocks &&
            Math.abs((i % numCols) - (index % numCols)) <= 1
        );

        this.classList.add("highlight");
        setTimeout(() =>{
            this.classList.remove("highlight")
        }, 250);

        // shuffleArray(voisins)
        //     .slice(0, 1)
        //     .forEach((nIndex) => {
        //         const voisin = backgroundContainer.children[nIndex];
        //         if (voisin) {
        //             voisin.classList.add("highlight");
        //             setTimeout(() =>{
        //                 voisin.classList.remove("highlight")
        //             }, 500);
        //         }
        //     });
    };

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };

    createBlocks();

/************************************************** LOCOMOTIVE SCROLL ET GSAP **************************************** */




gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('[data-scroll-container]')

const locoScroll = new LocomotiveScroll({
  el: scroller,
  smooth: true,
  direction: "horizontal",
  smartphone: {
    smooth: true,
    direction: "horizontal",
  },
  tablet: {
    smooth: true,
    direction: "horizontal",
  }
});

locoScroll.on("scroll", ScrollTrigger.update);

//locoScroll.on("scroll", function() {
//  console.log( locoScroll.scroll.instance.scroll.x )
//});

ScrollTrigger.scrollerProxy(scroller, {
 // scrollTop(value) {
 //   return arguments.length
 //     ? locoScroll.scrollTo(value, 0, 0)
 //     : locoScroll.scroll.instance.scroll.y;
 // },
  scrollLeft(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.x;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: scroller.style.transform ? "transform" : "fixed"
});

ScrollTrigger.defaults({
  scroller: scroller
})

gsap.set('section', { backgroundColor: (index, target) => { return target.getAttribute('data-bgcolor') },
                      color: (index, target) => { return target.getAttribute('data-textcolor') }})



gsap.to(".anim-wrap", {
  scrollTrigger: {
    trigger: ".vertical",
    start: () => "left left",
    end: () => "+=" + document.querySelector('.anim-wrap').scrollHeight,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    scrub: true,
    horizontal: true,
    invalidateOnRefresh: true
    // markers: true
  },
  y: () => { return -(document.querySelector('.anim-wrap').scrollHeight - window.innerHeight) },
  ease: "none"
});


//CONSOLE.LOG SCROLL-X AND SCROLL-Y AMMOUNT
locoScroll.on("scroll", () => {
  const scrollX = locoScroll.scroll.instance.scroll.x;
  const scrollY = locoScroll.scroll.instance.scroll.y;
  // console.log('Scroll X:', scrollX, 'Scroll Y:', scrollY);
  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo");
  if (scrollX < 10) {
    header.style.height = "100px";
    logo.style.height = "75px";
  } else {
    header.style.height = "75px";
    logo.style.height = "60px";
  }

  if ((header.style.height === "75px") && (scrollX < 10)) {
    header.style.height = "100px";
    logo.style.height = "75px";
  }
});


// NAV MENU LINKS SCROLLTO
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Récupérer l'identifiant de la section à partir de l'attribut href du lien
    const sectionID = link.getAttribute("href").substring(1);
    // console.log("clicked", sectionID);
    
    // Faire défiler jusqu'à la section en utilisant Locomotive Scroll
    if (locoScroll) {
      locoScroll.scrollTo(`#${sectionID}`, {
        easing: [0.3, 1.60, 0.4, 1]
      });
    }

    // Ajuster scrollX en fonction de la sectionID
    let scrollX = 0;
    switch (sectionID) {
      case "home":
        scrollX = 0;
        break;
      case "about":
        scrollX = locoScroll.scroll.instance.limit.x / 3;
        break;
      case "projects":
        scrollX = 200 * window.innerWidth;
        break;
      case "contact":
        scrollX = locoScroll.scroll.instance.limit.x;
        break;
      default:
        scrollX = 0;
        break;
    }
    
    // console.log('scrollX:', scrollX);
  });
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();




});
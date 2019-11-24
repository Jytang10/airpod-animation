const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTIOn
const section = document.querySelector('section');
const endText = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//SCENES
let scene = new ScrollMagic.Scene({
  duration: 9000,       //Change based on content and need. Video duration is 9 seconds in this project
  triggerElement: intro,
  triggerHook: 0        //Position to finish some action (unpin, etc.), or start animation (trigger effect)
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//TEXT ANIMATION
const textAnimation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnimation)
.addTo(controller);

//VIDEO ANIMATION
let accelamount = 0.1;   //Easing effect of scroll
let scrollpos = 0;
let delay = 0;          // Delay's job is to catch up to where we scrolled

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay)
  video.currentTime = delay;
}, 33.3)
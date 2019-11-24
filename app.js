const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTIOn
const section = document.querySelector('section');
const endText = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 9000,       //Change based on content and need. Video duration is 9 seconds in this project
  triggerElement: intro,
  triggerHook: 0        //Position to finish some action (unpin, etc.), or start animation (trigger effect)
})
.addIndicators()
.setPin(intro)
.addTo(controller);
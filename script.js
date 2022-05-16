let colorOne = ["#FFC600"];
let colorTwo = ["#247881"];
let i=30;

const btn = document.querySelector(".btn");
btn.addEventListener("click", run);

function run () {
gsap.to(".one", {x:-3*i, y:6*i, delay: .1, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".two", {x:-3*i, y:6*i, delay: .2, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".three", {x:-3*i, y:6*i, delay: .3, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".four", {x:-3*i, y:6*i, delay: .4, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".five", {x:-3*i, y:6*i, delay: .5, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".six", {x:-2*i, y:3*i, delay: .6, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".seven", {x:-1*i, y:2*i, delay: .7, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".eight", {x:0*i, y:-1*i, delay: .8, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".nine", {x:0*i, y:-1*i, delay: .9, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".ten", {x:0*i, y:-1*i, delay: 1.0, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".eleven", {x:0*i, y:-1*i, delay: 1.1, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".twelve", {x:0*i, y:-1*i, delay: 1.2, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".thirteen", {x:2*i, y:-2*i, delay: 1.3, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".fourteen", {x:2*i, y:-4*i, delay: 1.4, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".fifteen", {x:2*i, y:-6*i, delay: 1.5, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".sixteen", {x:2*i, y:-8*i, delay: 1.6, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})
gsap.to(".seventeen", {x:2*i, y:-10*i, delay: 1.7, duration: 3, ease: "power4", backgroundColor: colorOne, rotation: 360})

gsap.to (".btn", { x:2*i, y:-12*i, delay: 2.5, duration: 3, backgroundColor: colorTwo, ease: "bounce", rotation: 315})

btn.textContent = ""
}
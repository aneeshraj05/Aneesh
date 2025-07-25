gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Enable smooth scroll
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
});

gsap.timeline().to(".title span", {
 
y:150,
skewY:7,
duration:3,
stagger:0.05,
  
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".title",
    start: "top 80%",
  }
}).from(".title span", {
  y: 150,
  skewY: 7,
  opacity: 0,
  duration: 1.5,
  stagger: 0.1,
  ease: "power4.out"
});

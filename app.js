gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Enable smooth scroll
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
});

const t1= gsap.timeline();
t1.from(".title span", {

  autoAlpha:0,
  x:-250,
 

  duration:2,
  
},'a')
t5=gsap.timeline({
  scrollTrigger:{
    trigger:"#section3",
    start:"10%",
    end:"30%",
    scrub:true,


  }
});

t1.from(".intro-text", {
  autoAlpha:0,
  y:150,

  duration:1,


},'a')

t1.to(".img-content",{
 
  height:"480px",
  duration:1,
  delay:1,
  ease:'sine.out',
  autoAlpha:1,

},'a')


const span=document.querySelector('.hover-btn');
const overlay =document.querySelector('.sec2');
window.addEventListener('mousemove',(e)=>{
  const { clientX, clientY}=e;
  const x=Math.round((clientX/window.innerWidth)*100);
    const y=Math.round((clientY/window.innerHeight)*100);
              gsap.to(overlay,{
                '--x':`${x}%`,
              '--y':`${y}%`,
              duration:0.3,
              ease:'sine.out',

              })
})




const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  speed: 1000,
  autoplay: {
    delay: 0.8,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
});


t5=gsap.timeline({
  scrollTrigger:{
    trigger:"#section3",
    start:"-19%",
    width:"105%",
    end:"30%",
    scrub:true,


  }
});
t5.from("#section3 .img-container img",{
  scale:1.5,
  duration:2,
  ease:"sine.out",
  

})
t6=gsap.timeline();
t6.from(".skills",{
  autoAlpha:0,

  x:450,
  duration:2,
},'a')


t9=gsap.timeline({
  scrollTrigger:{
    trigger:"#section4",
    start:"-30%",
    end:"50%",
    scrub:true,
  }
})
t9.to(".contact .left",{
  rotate:50,
},'b')
t9.to(".contact .right",{
  rotate:-50,
},'b')
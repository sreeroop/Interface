gsap.registerPlugin(ScrollTrigger); 

function init() {

    gsap.from('.anim-img', {duration: 5, opacity: 0 , ScrollTrigger: {
        trigger: '.speaker',
        start: 'top bottom-=100',
        end: 'bottom bottom-=200',
        scrub: 'true',
        yoyo: 'true',
        markers: 'true'
    }});

    
}

window.addEventListener('load', function () {
    init();
});
/*
gsap.to('.mainButtons', {duration: 3,
    delay: 1,
    y: -20 })
gsap.to('#mainPhoto', {
    
    y: -20 })
gsap.to('heading', {
    
    y: -20 })
gsap.to("img", { y: -20 });
*/
gsap.from("ul li", { duration: 2,
     delay: 1,
      y: -20,
    stagger: 0.3 });

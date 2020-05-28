const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');

        

    });

    navLinks.forEach((link, index) => {
        link.style.animation = 'navAnimation 0.5s ease forward ${index / 7 + 0.3}s';
        console.log(index / 7);
    });
    
}
navSlide();
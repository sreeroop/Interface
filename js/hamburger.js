const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelector(".navLinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navAnim 5s ease forward ${index / 7 + 5}s`;
      }
    });

    burger.classList.toggle("toggle");
  });

};
navSlide();

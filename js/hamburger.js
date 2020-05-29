const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navActive");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navAnim 0.5s ease forward ${index / 7 + 2}s`;
      }
    });
    burger.classList.toggle('toggle');
  });

  // burger.classList.toggle('toggle');
};
navSlide();

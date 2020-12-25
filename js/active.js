 // Cache selectors
 var lastId,
   topMenu = $(".navLinks"),
   topMenuHeight = topMenu.outerHeight() + 15,
   // All list items
   menuItems = topMenu.find("a"),
   // Anchors corresponding to menu items
   scrollItems = menuItems.map(function () {
     var item = $($(this).attr("href"));
     if (item.length) {
       return item;
     }
   });

 // Bind click handler to menu items
 // so we can get a fancy scroll animation
 menuItems.click(function (e) {
   var href = $(this).attr("href"),
     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
   $("html, body").stop().animate(
     {
       scrollTop: offsetTop,
     },
     300
   );
   e.preventDefault();
 });

 // Bind to scroll
 $(window).scroll(function () {
   // Get container scroll position
   var fromTop = $(this).scrollTop() + topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function () {
     if ($(this).offset().top < fromTop) return this;
   });
   // Get the id of the current element
   cur = cur[cur.length - 1];
   var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
     lastId = id;
     // Set/remove active class
     menuItems
       .parent()
       .removeClass("active")
       .end()
       .filter("[href='#" + id + "']")
       .parent()
       .addClass("active");
   }
 });

/*
const sections = document.querySelectorAll("section");

const active = document.querySelector(".active");

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;

    var activeAnchor = document.querySelector(`[data-page=${className}]`);

    const gradientIndex = entry.target.getAttribute("data-index");

    const coords = activeAnchor.getBoundingClientRect();

    const directions = {
      height: coords.height,

      width: coords.width,

      top: coords.top,

      left: coords.left,
    };

    if (entry.isIntersecting) {
      active.style.setProperty("left", `${directions.left}px`);

      active.style.setProperty("top", `${directions.top}px`);

      active.style.setProperty("width", `${directions.width}px`);

      active.style.setProperty("height", `${directions.height}px`);

    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
*/
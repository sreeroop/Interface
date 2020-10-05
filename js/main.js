setTimeout(function () {
  $(".loader-wrapper").fadeOut();
  $(".logo").delay(150).fadeOut("slow");
  $("body").removeClass("load");
}, 5000);

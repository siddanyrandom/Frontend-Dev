$(function() {
  let index = 0;
  const banners = $(".banner");
  banners.eq(0).show();

  $("#hide").on("click", function() {
    banners.hide();
  });

  $("#show").on("click", function() {
    banners.show();
  });

  $("#slide").on("click", function() {
    banners.slideToggle();
  });

  $("#fade").on("click", function() {
    banners.fadeToggle();
  });

  setInterval(function() {
    banners.eq(index).fadeOut(500);
    index = (index + 1) % banners.length;
    banners.eq(index).fadeIn(500);
  }, 5000);
});

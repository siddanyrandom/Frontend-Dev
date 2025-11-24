jQueryV1(function($) {
  let slides = ["Slide 1", "Slide 2", "Slide 3"];
  let i = 0;

  setInterval(function() {
    i = (i + 1) % slides.length;
    $("#carousel").text(slides[i]);
  }, 2000);

  $(".widget").on("click", function() {
    $(".widget").removeClass("active-widget");
    $(this).addClass("active-widget");
  });
});

jQueryV2(function($) {
  $("#open-modal").on("click", function() {
    $("#modal").fadeIn(200);
  });

  $("#close-modal").on("click", function() {
    $("#modal").fadeOut(200);
  });

  $(".widget").hover(
    function(e) {
      $("#tooltip").text("Widget ID: " + $(this).data("id"))
        .css({ top: e.pageY + 10, left: e.pageX + 10 })
        .show();
    },
    function() {
      $("#tooltip").hide();
    }
  );
});

$(function() {
  $(".product").on("click", function() {
    if ($(this).data("stock") === "out") {
      alert("This product is out of stock.");
      return;
    }
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $(".product").hover(
    function() { $(this).find(".details").fadeIn(150); },
    function() { $(this).find(".details").fadeOut(150); }
  );

  $(".favorite").on("click", function(e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });
});

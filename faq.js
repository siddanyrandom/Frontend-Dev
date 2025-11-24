$(function() {
  $(".question").on("click", function() {
    $(this).next(".answer").slideToggle();
  });

  $(".question").on("dblclick", function() {
    $(".answer").slideUp();
  });

  $("input").on("focus", function() {
    $(this).closest(".faq-item").addClass("highlight");
  });

  $("input").on("blur", function() {
    $(this).closest(".faq-item").removeClass("highlight");
  });
});

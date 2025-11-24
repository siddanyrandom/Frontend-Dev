$(function() {
  $(".manager").on("click", function() {
    $(".employee").removeClass("highlight");
    $(this).siblings(".employee").addClass("highlight");
  });

  $(".employee").hover(
    function() { $(this).next(".contact").show(); },
    function() { $(this).next(".contact").hide(); }
  );

  $(".department").on("click", function(e) {
    if ($(e.target).hasClass("manager")) return;
    $(".department").children().removeClass("highlight");
    $(this).children().addClass("highlight");
  });

  $("#random").on("click", function() {
    $(".employee").removeClass("sibling-highlight");
    const emp = $(".employee").eq(Math.floor(Math.random() * $(".employee").length));
    emp.siblings(".employee").addClass("sibling-highlight");
  });

  $("#toggle-teams").on("click", function() {
    const sections = $("#teams").children(".department");
    if (sections.first().find(".employee:visible").length > 0)
      sections.find(".employee, .contact").slideUp();
    else
      sections.find(".employee, .contact").slideDown();
  });
});

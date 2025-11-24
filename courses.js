$(function() {
  function filterCourses() {
    const q = $("#search").val().toLowerCase();
    let c = 0;

    $(".course").each(function() {
      const text = $(this).text();
      const lower = text.toLowerCase();

      $(this).html(text);
      $(this).removeClass("highlight");

      if (lower.includes(q)) {
        c++;
        const start = lower.indexOf(q);
        const end = start + q.length;
        const highlighted = 
          text.slice(0, start) +
          "<span class='highlight'>" +
          text.slice(start, end) +
          "</span>" +
          text.slice(end);
        $(this).html(highlighted);
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    $("#count").text(c + " course(s) found");
  }

  $("#search").on("keyup", function() {
    filterCourses();
  });

  $("#clear").on("click", function() {
    $("#search").val("");
    $(".course").each(function() {
      $(this).html($(this).text()).show().removeClass("highlight");
    });
    $("#count").text("");
  });
});

$(function() {
  $("#add").on("click", function() {
    const newPost = $('<div class="post"><h3>New Blog Post</h3><p>Content added dynamically.</p></div>');
    $("#post-list").append(newPost);
  });

  $("#prepend").on("click", function() {
    const featured = $('<div class="post"><h3>Featured Post</h3><p>This is a highlighted important update.</p></div>');
    $("#post-list").prepend(featured);
  });

  $("#remove-last").on("click", function() {
    $("#post-list .post").last().remove();
  });

  $(document).on("click", ".post", function() {
    const tag = $('<span class="tag">Tag</span>');
    $(this).find("h3").before(tag.clone());
    $(this).find("p").after(tag.clone());
  });

  $("#apply-keyword").on("click", function() {
    const k = $("#keyword").val().toLowerCase();
    $(".post").removeClass("highlight");
    if (!k) return;
    $(".post").each(function() {
      const text = $(this).text().toLowerCase();
      if (text.includes(k)) {
        $(this).addClass("highlight");
      }
    });
  });
});

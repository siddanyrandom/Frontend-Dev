$(function() {
  function showMsg(text) {
    $("#success").text(text).fadeIn(200).delay(1000).fadeOut(300);
  }

  function attachEvents(btn) {
    btn.on("click", function() {
      const t = $(this).text();
      if (t === "Subscribe") {
        $(this).text("Unsubscribe");
        showMsg("Subscribed successfully");
      } else {
        $(this).text("Subscribe");
        showMsg("Unsubscribed successfully");
      }
    });
  }

  $(".subscribe-btn").each(function() {
    attachEvents($(this));
  });

  $("#add-topic").on("click", function() {
    const name = $("#new-topic-input").val().trim();
    if (!name) return;
    const newTopic = $('<div class="topic"><span>' + name + '</span><button class="subscribe-btn">Subscribe</button></div>');
    $("#topics-container").append(newTopic);
    attachEvents(newTopic.find(".subscribe-btn"));
    $("#new-topic-input").val("");
    showMsg("New topic added");
  });

  $(document).on("contextmenu", ".topic", function(e) {
    e.preventDefault();
    const btn = $(this).find(".subscribe-btn");
    btn.off("click");
    $(this).remove();
    showMsg("Topic removed");
  });
});

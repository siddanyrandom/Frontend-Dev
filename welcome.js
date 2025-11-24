$(function() {
  function setGreeting() {
    const h = new Date().getHours();
    let msg = "Good Evening";
    if (h < 12) msg = "Good Morning";
    else if (h < 17) msg = "Good Afternoon";
    $("#greeting").text(msg);
  }

  setGreeting();

  $("#change-greeting").on("click", function() {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Push yourself, because no one else will.",
      "Dream it. Wish it. Do it.",
      "Stay positive, work hard, make it happen."
    ];
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    $("#greeting").text(q);
  });

  $("#toggle-message").on("click", function() {
    $("#welcome-box").toggle();
  });

  $("#greeting").on("click", function() {
    alert("You clicked the greeting!");
  });
});

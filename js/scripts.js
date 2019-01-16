$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-said").prepend("<li>purr</li>");
    $("ul#dog-said").prepend("<li>wag</li>");
  });

  $("button#dog").click(function() {
    $("ul#cat-said").prepend("<li>hiss</li>");
    $("ul#dog-said").prepend("<li>bark</li>");
  });

  $("button#look").click(function() {
    $("ul#look").after("<img src='img/cat.jpeg' alt'the cat...>");
    $("img").click(function() {
      $(this).fadeOut();
    });
  });



});

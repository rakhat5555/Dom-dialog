$(document).ready(function(){
  $("button#hello").click (function(){
    $("ul#user").append("<li>Hello!</li>");
    $("ul#webpage").append("<li>hello Rakhat!</li>");

    $("ul#user").children("li").click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").click(function(){
      $(this).remove();
    });

    });

  $("button#goodbye").click(function(){
    $("ul#user").append("<li>goodbye</li>");
    $("ul#webpage").append("<li>goodbye , see ya tomorrow!</li>");

        $("ul#user").children("li").first().click(function(){
          $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function(){
          $(this).remove();
        });
  });
  $("button#stop").click(function() {
    $("ul#user").after("<li>stop coping me!</li>");
      $("ul#webpage").after("<li>ok, May God bless You!</li>");

          $("ul#user").children("li").first().click(function(){
            $(this).remove();
          });
          $("ul#webpage").children("li").first().click(function(){
            $(this).remove();
          });
  });

});

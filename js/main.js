$(document).ready(function () {
    $(".mycard").fadeOut();


    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y < 100) {
          $(".mycard").fadeOut(2000);
      } else {
          $(".mycard").fadeIn(2000);
      }
    });

    $(".mycard").click(function () {
    $(".myModal").css("display", "block");
    })
});
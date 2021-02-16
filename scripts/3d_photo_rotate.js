jQuery(document).ready(function($){
       var card = $("#my_photo_container");
        card.on('mousemove', function (e) {
            var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
            var y = e.clientY - $(this).offset().top + $(window).scrollTop();
             
            var rY = map(x, 0, $(this).width(), -17, 17);
            var rX = map(y, 0, $(this).height(), -17, 17);
         
            $(this).children("#my_photo").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
        });
         
        card.on('mouseenter', function () {
            $(this).children("#my_photo").css({
                transition: "all " + 0.2 + "s" + " linear",
            });
        });
     

             
        function map(x, in_min, in_max, out_min, out_max)
        {
            return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
          }
  });
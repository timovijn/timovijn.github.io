jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30;
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/40);
      yp += ((mouseY - yp)/40);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 5);
  
  });

  // $(".welcome-image-image").mouseenter(function(){
  //   $(".circle").css("width","60px");
  //  });
 
  // $(".welcome-image-image").mouseleave(function(){
  //   $(".circle").css("width","30px").animate();
  //  });

  // $(".welcome-image-image").hover($(".circle").css("width","60px"), $(".circle").css("width","30px"))

  var cursor = $(".circle");

  $(".o-h5")
  .mouseenter(function() {
      cursor.css({
          // width: "60px"
          // transform: "rotate(1deg)",
          transform: "scale(1)"
      });
  })
  .mouseleave(function() {
      cursor.css({
          // width: "30px"
          transform: "scale(0.5)"
      });
  });
jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 10;
      mouseY = e.pageY - 10;
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/40);
      yp += ((mouseY - yp)/40);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 5);
  
  });
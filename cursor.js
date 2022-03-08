// jQuery(document).ready(function() {

  // $('.welcome-image-container').mouseenter(function() {

    // var $this = $(".welcome-image-container");
    // var offset = $this.offset();
    // var width = $this.width();
    // var height = $this.height();

    // var centerX = offset.left + width / 2;
    // var centerY = offset.top + height / 2;

    // var class_names = $($this).attr('class');
  
    // var class_name = class_names.split( ' ' ); 
  
    // var c = parseInt( centerX + centerY );
  
    // console.log( centerX );
    // console.log( centerY );
  
    // $("#circle").css({left: centerX +'px', top: centerY +'px'});
  
  // });

  // $('.welcome-image-container').mouseleave(function() {  
    
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
    
  // });

// });

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


  // var li = ul.querySelectorAll('li');
  // var tooltip = document.querySelector('.tooltip');
  // var removeTooltip;

  // function onMouseOver(e) {
  //     return function() {
  //     clearTimeout(removeTooltip);
      
  //     tooltip.innerHTML = e.innerHTML;
    
  //     var w = window;
  //     var tooltipTopPosition = e.offsetTop + (e.clientHeight / 2) - (tooltip.clientHeight / 2);
  //     var leftPosition = e.offsetLeft + e.offsetWidth + 5;
  //     var toolTipWidth = w.innerWidth - leftPosition - 5;
      
  //     // tooltip.style.top = tooltipTopPosition + 'px';
  //     // tooltip.style.left = leftPosition + 'px';
  //     // tooltip.style.width = toolTipWidth + 'px';
     
  //     $("#circle").css({left: 100 +'px', top: 200 +'px'});

  //   }
  // }

  // ha = onMouseOver("#welcome-image-image");

  // function onMouseLeave(e) {
  //   return function() {
  //     clearTimeout(removeTooltip);
      
  //     removeTooltip = setTimeout(function() {
  //       tooltip.innerHTML = '';  
  //     }, 100);
      
  //   };
  // }

  // li.forEach(function(item) {
  //   item.onmouseover = onMouseOver(item);
  //   item.onmouseleave = onMouseLeave(item);
  // });


  // $("#circle").css({left: leftPosition +'px', top: tooltipTopPosition +'px'});

// $(document).ready(function () {
//   $('.around li').hover(function () {
//       var index = $('.around li').index(this);
//       console.log(index);
//   }, function () { });

// });

// var $this = $(".welcome-image-container");
// var offset = $this.offset();
// var width = $this.width();
// var height = $this.height();

// var centerX = offset.left + width / 2;
// var centerY = offset.top + height / 2;

// $('.welcome-image-container').hover(function() {

//   var class_names = $($this).attr('class');

//   var class_name = class_names.split( ' ' ); 

//   var c = parseInt( centerX + centerY );

//   console.log( c );

//   $("#circle").css({left: centerX +'px', top: centerY +'px'});

// });
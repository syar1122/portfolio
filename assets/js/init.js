(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      throttle:50,
      scrollOffset:0
    });
    $('.carousel').carousel({
      duration:500,
      dist:-100,
      indicators:true,
      numVisible:3,
      shift:20
    });
    var flag = true;

    
    $(".tool-icon").inViewport(function (px) {
      if(px && flag) {  
        gsap.fromTo(".tool-icon",{opacity:0,
        scale:0.1}, {
        duration:2,
        scale: 1, 
        opacity: 1, 
        delay: 0.3, 
        stagger: 0.5,
        repeat:0,
        ease: "elastic", 
        force3D: true
      });
     flag = false;
      
      
        
      
    }});
   

    // gsap.to(".tool-icon", {
    //   duration: 1.5, 
    //   opacity: 0, 
    //   y: -100, 
    //   stagger: 0.1,
    //   ease: "back.in"
    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
      }
      visPx();
      
      $(win).on("resize scroll", visPx);
    });
  };
})(jQuery, window);

// (function() {
//   var elements;
//   var windowHeight;

//   function init() {
//     elements = document.querySelectorAll('.tool-icon');
//     windowHeight = window.innerHeight;
//   }

//   function checkPosition() {
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       var positionFromTop = elements[i].getBoundingClientRect().top;

//       if (positionFromTop - windowHeight <= 0) {
//         element.classList.add('anim');
//         element.classList.remove('hidden');
//       }
//     }
//   }

//   window.addEventListener('scroll', checkPosition);
//   window.addEventListener('resize', init);

//   init();
//   checkPosition();
// })();





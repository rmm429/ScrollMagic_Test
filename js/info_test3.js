$(function() {

  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();


  var tween = TweenMax.to('#pin', 2, {
          backgroundColor: 'red',
          color: 'white'
      });

      var tween2 = TweenMax.to('.inside2', 2, {
      transform: 'scale(1.25)',
      ease: Linear.easeNone
    });

  var scene = new ScrollMagic.Scene({
            triggerElement: '#scene',
            duration: 200
        })
        .setPin('#pin')
        .setTween(tween2)
        .addTo(controller)
        .addIndicators();




  var tween3 = TweenMax.to('#tween', 0.5, {
        backgroundColor: 'red',
        color: 'white'
    });

  var scene2 = new ScrollMagic.Scene({
            triggerElement: '#scene2',
            duration: 300
        })
        .setPin('#scene2')
        .setTween(tween3)
        .addTo(controller)
        .addIndicators();

});

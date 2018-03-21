$(function() {

  $("html").niceScroll();

  var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');

  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});


  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  var aboutMe = document.querySelectorAll(".text-about-me");
  var compsciDrexel = document.querySelectorAll(".text-compsci-drexel");
  var tracks = document.querySelectorAll(".text-tracks");
  var tracksContent = document.querySelectorAll(".text-tracks-content");
  var minor = document.querySelectorAll(".text-minor");
  var minorContent = document.querySelectorAll(".text-minor-content");

  var tlAboutMe = new TimelineMax()
  .to(aboutMe, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-about-me', 0.5, {
      transform: 'scale(1.5)'
    }))
  .to(compsciDrexel, 1, {opacity:1}, "-=0.1")
  .to(tracks, 1, {opacity:1}, "-=0.1")
  .to(tracksContent, 1, {opacity:1}, "-=0.1")
  .to(minor, 1, {opacity:1}, "-=0.1")
  .to(minorContent, 1, {opacity:1}, "-=0.1");


  // Scene Handler
  var sceneAboutMe = new ScrollMagic.Scene({
    triggerElement: "#about-me-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#about-me-content")
  .setTween(tlAboutMe)
  .addIndicators(); // the element we want to pin



  var technical = document.querySelectorAll(".text-technical");
  var languages = document.querySelectorAll(".text-languages");
  var languagesProficient = document.querySelectorAll(".text-languages-proficient");
  var languagesLimited = document.querySelectorAll(".text-languages-limited");
  var software = document.querySelectorAll(".text-software");
  var softwareContent = document.querySelectorAll(".text-software-content");
  var certifications = document.querySelectorAll(".text-certifications");
  var certificationsContent = document.querySelectorAll(".text-certifications-content");

  var tlTechnical = new TimelineMax()
  .to(technical, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-technical', 0.5, {
      transform: 'scale(1.5)'
    }))
  .to(languages, 1, {opacity:1}, "-=0.1")
  .to(languagesProficient, 1, {opacity:1}, "-=0.1")
  .to(languagesLimited, 1, {opacity:1}, "-=0.1")
  .to(software, 1, {opacity:1}, "-=0.1")
  .to(softwareContent, 1, {opacity:1}, "-=0.1")
  .to(certifications, 1, {opacity:1}, "-=0.1")
  .to(certificationsContent, 1, {opacity:1}, "-=0.1");

  // Scene Handler
  var sceneTechnical = new ScrollMagic.Scene({
    triggerElement: "#technical-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#technical-content")
  .setTween(tlTechnical)
  .addIndicators(); // the element we want to pin






  var employment = document.querySelectorAll(".text-employment");
  var employmentCurrent = document.querySelectorAll(".text-employment-current");
  var osisoft = document.querySelectorAll(".text-osisoft");
  var osisoftDetails = document.querySelectorAll(".text-osisoft-details");
  var osisoftContent = document.querySelectorAll(".text-osisoft-content");
  var employmentPrevious = document.querySelectorAll(".text-employment-previous");
  var chop = document.querySelectorAll(".text-chop");
  var chopDetails = document.querySelectorAll(".text-chop-details");
  var chopContent = document.querySelectorAll(".text-chop-content");
  var zpub = document.querySelectorAll(".text-zpub");
  var zpubDetails = document.querySelectorAll(".text-zpub-details");
  var zpubContent = document.querySelectorAll(".text-zpub-content");

  var tlEmployment = new TimelineMax()
  .to(employment, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-employment', 0.5, {
      transform: 'scale(1.5)'
    }))
  .to(employmentCurrent, 1, {opacity:1}, "-=0.1")
  .to(osisoft, 1, {opacity:1}, "-=0.1")
  .to(osisoftDetails, 1, {opacity:1}, "-=0.1")
  .to(osisoftContent, 1, {opacity:1}, "-=0.1")
  .to(employmentPrevious, 1, {opacity:1}, "-=0.1")
  .to(chop, 1, {opacity:1}, "-=0.1")
  .to(chopDetails, 1, {opacity:1}, "-=0.1")
  .to(chopContent, 1, {opacity:1}, "-=0.1")
  .to(zpub, 1, {opacity:1}, "-=0.1")
  .to(zpubDetails, 1, {opacity:1}, "-=0.1")
  .to(zpubContent, 1, {opacity:1}, "-=0.1");

  // Scene Handler
  var sceneEmployment = new ScrollMagic.Scene({
    triggerElement: "#employment-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#employment-content")
  .setTween(tlEmployment)
  .addIndicators(); // the element we want to pin





  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    sceneAboutMe,
    sceneTechnical,
    sceneEmployment
  ]);

});

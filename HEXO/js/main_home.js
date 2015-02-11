$(document).foundation();
$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    slidesNavigation: true,
    sectionsColor: ['#F2F2F2', '#F2F2F2', 'white', '#F2F2F2'],
      afterRender: function(){
        //playing the video
  $('video').get(0).play();
    }
  });
});

$( "#scroll_down" ).on( "click", function(){
  $.fn.fullpage.moveSectionDown();
});
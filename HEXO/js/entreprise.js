$(document).foundation();
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
    verticalCentered: true,
    slidesNavigation: true,
    sectionsColor: ['#F2F2F2', '#F2F2F2', '#F2F2F2',],
  });
});

$( "#scroll_down" ).on( "click", function(){
  $.fn.fullpage.moveSectionDown();
});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

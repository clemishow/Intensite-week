$(document).ready(function() {
  
  var isPlayed = {
    videos: [],

    add: function (id) {
      this.videos.push(id);
    },

    exist: function (id) {
      if (this.videos.indexOf(id) >= 0) return true;

      return false;
    }
  };

  function vidplay(id) {
    if (isPlayed.exist(id)) return false;

    var video = document.getElementById("myVideo" + id);
    video.play();
    isPlayed.add(id);
  }

  $(document).foundation();

  $('#fullpage').fullpage({
    anchors: ['home', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixPage'],

    "afterLoad": function(anchorLink, index) {
      var idVideo = 0;

      switch (anchorLink) {
        case 'secondPage':
          idVideo = 1;
          break;
        case 'thirdPage':
          idVideo = 2;
          break;
        case 'fourthPage':
          idVideo = 3;
          break;
        case 'fifthPage':
          idVideo = 4;
          break;
        case 'sixPage':
          idVideo = 5;
          break;
      }

      if (idVideo != 0) vidplay(idVideo);
    },

    sectionsColor: ['#34495e', '#34495e', '#34495e', '#34495e', '#34495e', '#34495e'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page', 'Fifth page', 'Last page'],
  });
});
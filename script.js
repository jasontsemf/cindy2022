(function() {
  //variables
  var quarantine, weGrew, changePosition, changeSong, changeVolume, whoMade, pauseSong, playSong, playlist, galatic, weHandsome, updatePositionSlider, updateSlider;

  weGrew = new Howl({
    urls: ['https://jasontsemf.github.io/cindy2022/assets/我們都是這樣長大的.mp3'],
    volume: window.volume
  });

  whoMade = new Howl({
    urls: ['https://jasontsemf.github.io/cindy2022/assets/誰令你心痴.mp3'],
    volume: window.volume
  });

  galatic = new Howl({
    urls: ['https://jasontsemf.github.io/cindy2022/assets/銀河修理員.mp3'],
    volume: window.volume
  });

  weHandsome = new Howl({
    urls: ['https://jasontsemf.github.io/cindy2022/assets/我們很帥.mp3'],
    volume: window.volume
  });

  quarantine = new Howl({
    urls: ['https://jasontsemf.github.io/cindy2022/assets/隔離.mp3'],
    volume: window.volume
  });

  window.open = true;

  window.volume = 0.5;

  window.position = 0;

  window.duration = 270;

  playlist = [weGrew];

  window.currentSong = playlist[0];

  window.add = null;

  changeSong = function(song) {
    window.currentSong.stop();
    window.currentSong.pos(0);
    window.position = 0;
    $(".slider").slider("value", 0);
    window.currentSong = song;
    $(".play-song > i").removeClass('fa-play');
    $(".play-song > i").addClass('fa-pause');
    window.open = false;
    return song.play();
  };

  updatePositionSlider = function() {
    return window.position += 1;
  };

  playSong = function(song) {
    song.play();
    return window.add = setInterval(updatePositionSlider, 1000);
  };

  pauseSong = function(song) {
    song.pause();
    return clearInterval(window.add);
  };

  changeVolume = function(song) {
    return song.volume(window.volume);
  };

  changePosition = function(song) {
    return song.pos(window.position);
  };

  updateSlider = function() {
    return $(".slider").slider("value", window.position);
  };

  $(function() {
    var slideUp;
    $(".slider").slider({
      min: 0,
      range: "min",
      max: window.duration,
      value: 0,
      slide: function(event, ui) {
        window.position = ui.value;
        return changePosition(window.currentSong);
      }
    });
    setInterval(updateSlider, 100);
    $("#volume-off").click(function() {
      currentSong.volume(0);
      return $(".slider-volume").slider("value", 0);
    });
    $("#volume-up").click(function() {
      currentSong.volume(1);
      return $(".slider-volume").slider("value", 100);
    });
    $(".slider-volume").slider({
      min: 0,
      range: "min",
      max: 100,
      value: 50,
      slide: function(event, ui) {
        window.volume = ui.value / 100;
        return changeVolume(window.currentSong);
      }
    });
    $("#play").click(function() {
      if (window.open) {
        playSong(window.currentSong);
        $(".play-song > i").removeClass('fa-play');
        $(".play-song > i").addClass('fa-pause');
        window.open = !window.open;
        return setInterval(updateSlider, 100);
      } else {
        pauseSong(window.currentSong);
        $(".play-song > i").removeClass('fa-pause');
        $(".play-song > i").addClass('fa-play');
        return window.open = !window.open;
      }
    });
    slideUp = true;
    $(".slide-up").click(function() {
      if (slideUp) {
        $(".song-list, .playlist-controls, .overlay").addClass("active");
        $(".slide-up").html("<i class='fa fa-chevron-down'></i>");
        return slideUp = !slideUp;
      } else {
        $(".song-list, .playlist-controls, .overlay").removeClass("active");
        $(".slide-up").html("<i class='fa fa-chevron-up'></i>");
        return slideUp = !slideUp;
      }
    });
    return $("tr").click(function() {
      if ($(this).attr('data-title') === "weGrew") {
        $(".song").html("我們都是這樣長大的");
        $(".band").css("background": "url(https://jasontsemf.github.io/cindy2022/assets/我們都是這樣長大的.jpg)  center no-repeat");
        window.duration = 270;
        setInterval(updateSlider, 100);
        $(".slider").slider("option", "max", 270);
        changeSong(weGrew);
      } else if ($(this).attr('data-title') === "whoMade") {
        $(".song").html("誰令你心痴");
        $(".band").css("background": "url(https://jasontsemf.github.io/cindy2022/assets/誰令你心痴.jpg)  center no-repeat");
        window.duration = 302;
        setInterval(updateSlider, 100);
        $(".slider").slider("option", "max", 302);
        changeSong(whoMade);
      } else if ($(this).attr('data-title') === "galatic") {
        $(".song").html("銀河修理員");
        $(".band").css("background", "url(https://jasontsemf.github.io/cindy2022/assets/銀河修理員.jpg)  center no-repeat");
        window.duration = 241;
        setInterval(updateSlider, 100);
        $(".slider").slider("option", "max", 241);
        changeSong(galatic);
      } else if ($(this).attr('data-title') === "weHandsome") {
        changeSong(weHandsome);
        $(".song").html("我們很帥");
        $(".band").css("background-repeat", "repeat");
        $(".band").css("background-position", "center");
        $(".band").css("background", "url(https://jasontsemf.github.io/cindy2022/assets/我們很帥.jpg)  center no-repeat");
        $(".slider").slider("option", "max", 245);
        window.duration = 245;
        setInterval(updateSlider, 100);
      } else if ($(this).attr('data-title') === "quarantine") {
        changeSong(quarantine);
        $(".song").html("隔離");
        $(".band").css("background", "url(https://jasontsemf.github.io/cindy2022/assets/隔離.jpg)  center no-repeat");
        $(".slider").slider("option", "max", 249);
        window.duration = 249;
        setInterval(updateSlider, 100);
      }
      $(".song-list, .playlist-controls, .overlay").removeClass("active");
      $(".slide-up").html("<i class='fa fa-chevron-up'></i>");
      return slideUp = !slideUp;
    });
  });

}).call(this);
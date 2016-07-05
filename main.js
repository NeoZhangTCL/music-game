$(document).ready(function(){
  var $do = document.createElement('audio');
  $do.setAttribute('src', 'soundtrack/1do.mp3');
  $do.setAttribute('autoplay', 'autoplay');
  var $re = document.createElement('audio');
  $re.setAttribute('src', 'soundtrack/2re.mp3');
  $re.setAttribute('autoplay', 'autoplay');
  var $mi = document.createElement('audio');
  $mi.setAttribute('src', 'soundtrack/3mi.mp3');
  $mi.setAttribute('autoplay', 'autoplay');
  var $fa = document.createElement('audio');
  $fa.setAttribute('src', 'soundtrack/4fa.mp3');
  $fa.setAttribute('autoplay', 'autoplay');
  var $so = document.createElement('audio');
  $so.setAttribute('src', 'soundtrack/5sol.mp3');
  $so.setAttribute('autoplay', 'autoplay');
  var $la = document.createElement('audio');
  $la.setAttribute('src', 'soundtrack/6la.mp3');
  $la.setAttribute('autoplay', 'autoplay');
  var $ti = document.createElement('audio');
  $ti.setAttribute('src', 'soundtrack/7ti.mp3');
  $ti.setAttribute('autoplay', 'autoplay');

  $.get();

  $(this).keypress(
      function(key){
        switch(parseInt(key.which,10)){
          case 49: $do.play();
            break;
          case 50: $re.play();
            break;
          case 51: $mi.play();
            break;
          case 52: $fa.play();
            break;
          case 53: $so.play();
            break;
          case 54: $la.play();
            break;
          case 55: $ti.play();
            break;
        }
      });

  $(this).keydown(
      function(key){
        switch(parseInt(key.which,10)){
          case 49: $('#do').css('background-color','#ff0000');
            break;
          case 50: $('#re').css('background-color','#ff7700');
            break;
          case 51: $('#mi').css('background-color','#ffdd00');
            break;
          case 52: $('#fa').css('background-color','#00ff00');
            break;
          case 53: $('#so').css('background-color','#0000ff');
            break;
          case 54: $('#la').css('background-color','#8a2be2');
            break;
          case 55: $('#ti').css('background-color','#c77df3 ');
            break;
        }
      });

  $(this).keyup(
    function(key){
      switch(parseInt(key.which,10)){
        case 49: $('#do').css('background-color','#aa1100');
        break;
        case 50: $('#re').css('background-color','#ff4400');
        break;
        case 51: $('#mi').css('background-color','#ffbb11');
        break;
        case 52: $('#fa').css('background-color','#55aa00');
        break;
        case 53: $('#so').css('background-color','#000055');
        break;
        case 54: $('#la').css('background-color','#310062');
        break;
        case 55: $('#ti').css('background-color','#4b0082');
        break;
      }
    });
});

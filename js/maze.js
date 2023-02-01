$(document).on('ready', () => {
  isStarted = false;
  $('#start').click(() => {
    $('#status').text('Game Started!!');
    isStarted = true;
  });

  $('#maze .boundary').mouseover(() => {
    if (isStarted) {
      $('#status').text('Game Lost!!');
    }
    isStarted = false;
  });

  $('#maze').mouseleave(() => {
    if (isStarted) {
      $('#status').text('You Lose!!');
    }
    isStarted = false;
  });

  $('#end').mouseover(() => {
    if (isStarted) {
      $('#status').text('You Won!! Click "S" again to begin the games');
    }
    isStarted = false;
  });
});

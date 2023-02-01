$(() => {
  $('#circle').click(() => {
    console.log('adsf');
    $('#circle').hide();
    clearInterval(timer);
  });

  $('#start-btn').click(() => {
    let selectedWidth = $('#width').val();
    let selectedGrowthAmount = $('#growth').val();
    let selectedInterval = $('#interval').val();

    let max = 500;
    let min = 1500;

    let circle = $('<div>', {
      id: 'circle',
      css: {
        position: 'absolute',
        left: Math.random() * (max - min) + min + 'px',
        width: selectedWidth + 'px',
        height: selectedWidth + 'px',
        borderRadius: selectedWidth + 'px',
        backgroundColor:
          '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
      },
    });

    $('#playground').append(circle);

    $('#circle').click(e => {
      e.target.remove();
      console.log(e.target);
      //   console.log('adsf');
      // $('#circle').remove();
      //   clearInterval(timer);
    });

    // $('#circle').click(function () {
    //   let a = $(this).css('background-color');
    //   console.log(a);
    // });

    // console.log(selectedWidth, selectedGrowthAmount, selectedInterval);
  });
  //EOF start-btn

  let timer = setInterval(function () {
    height = $('#circle').css('height');
    radius = $('#circle').css('border-radius');
    // $('#circle').css('height', '100px');
    // $('#circle').css('width', '100px');
    // $('#circle').css('border-radius', '100px');
    $('#circle').css('height', parseInt(height) + 10 + 'px');
    $('#circle').css('width', parseInt(height) + 10 + 'px');
    $('#circle').css('border-radius', parseInt(height) + 10 + 'px');
    clearInterval();
  }, 250);
});

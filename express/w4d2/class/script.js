/*
$(() => {
  $('#b').click();
});

//AJAX function
function makeCall() {
  let d = {
    number: $('#num').val(),
  };
  $.ajax({
    url: 'http://localhost:3000/spa',
    type: 'get',
    timeout: 5000, // 5 seconds
    success: successfunc,
    error: errorfunc,
    complete: completefunc,
  });

  //
  $.ajax('http://localhost:3000/spa', {
    type: 'get',
    timeout: 5000,
  })
    .done(sucessfunc)
    .fail(errorfunc);

  //alternative way
  $.post('http://localhost:3000/spa', {
    type: 'get',
    timeout: 5000,
  })
    .done(sucessfunc)
    .fail(errorfunc);

  //Just an example
  fetch('http:/....', { method: 'post' })
    .then(res => res.json())
    .then(sucessfunc)
    .catch(errorfunc)
    .finally(completefunc);

  //PROMISE example
  fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));
}

function successfunc(data) {
  console.log(data);
  let x = $('<div>', {
    class: 'product',
    html: $('<a>'),
  });
}

function errorfunc(xhr, status, exception) {
  console.log(exception);
}

function completefunc() {
  console.log('done');
}

*/

$(() => {
  $('#loader').hide();
  $('#b').click(makeCall);
});

function makeCall() {
  let d = {
    number: $('#num').val(),
  };
  $('#loader').show();
  fetch('http://localhost:3000/spa', {
    method: 'post',
    timeout: 2000,
  })
    .then(res => res.json())
    .then(sucessfunc)
    .catch(errorfunc)
    .finally(completefunc);
}

function sucessfunc(data) {
  for (i of data) {
    let h3 = $('<h3>', {
      text: i.name,
    });
    let img = $('<img>', {
      src: i.image,
    });
    let h5 = $('<h5>', {
      text: i.price,
    });
    let x = $('<div>', {
      class: 'product',
    });
    x.append(h3).append(img).append(h5);
    $('#inventory').prepend(x);
  }
}
function errorfunc(xhr, status, exception) {
  console.log(exception);
  let x = $('<h3>', {
    text: exception,
  });
  $('#inventory').prepend(x);
}
function completefunc() {
  $('#loader').hide();
}

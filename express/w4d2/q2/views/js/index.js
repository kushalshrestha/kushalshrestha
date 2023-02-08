$(() => {
  $('#btn-submit').click(makeCall);
  $('#qna').focus(function () {
    this.value = '';
  });
});

function makeCall() {
  fetch('http://localhost:3000/8ball', {
    method: 'get',
    timeout: 2000,
  })
    .then(res => res.json())
    .then(sucessfunc)
    .catch(errorfunc)
    .finally(completefunc);
}

function sucessfunc(data) {
  $('#qna').val(data.answer);
}
function errorfunc(xhr, status, exception) {
  console.log(exception);
}
function completefunc() {
  console.log('success');
}

$("input[type='text']").click(function () {
  $(this).select();
});

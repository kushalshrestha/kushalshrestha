$(() => {
  $('.status').hide();
  $('#btn-submit').click(makeCall);
});

function makeCall() {
  const formData = {
    productId: $('#prod-id-input').val(),
  };

  $.post({
    url: '/cart?id=' + formData.productId,
    data: JSON.stringify(formData),
    contentType: 'application/json; charset=utf-8',
  })
    .done(res => {
      $('#status-message').text(
        'Product added sucessfully. Total products in cart: ' +
          res.productList.length
      );
      $('.status').show();
    })
    .fail(res => {
      $('#status-message').text('Failed adding to cart!!!');
    });
}

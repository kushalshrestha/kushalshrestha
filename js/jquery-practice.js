// window.onload = eventFunction
/*
$(eventFunction);

function eventFunction() {
  alert('Function executed');
}
*/

$(() => {
  alert('Function executed');
  //   let x = (document.getElementById('b').onclidk = alert('b clicked'));
  //   let x = $('#bt').click('b clicked');

  $('#bt').click(() => alert('clicked'));

  //   $('p').click(function () {
  //     console.log(this);
  //   });

  let x = $('#bt')[0];
  let y = document.getElementById('bt');
  console.log(x);
  console.log(y);
  console.log(x === y);

  $('#navbar:first-child').click(() => alert('first child')); // See jquery traversing
  let a = $('#navbar').parents(); // See jquery traversing
  console.log(a);
  let xa = $('#navbar').children();
  xa.each((i, k) => console.log(k.outerText));

  let xab = $('<p>', {
    id: 'myP',
    text: 'The P Text generated from jquery',
    class: 'muted',
  });
  $('#sidebar').prepend(xab);
  $('#sidebar').append(xab);

  let sidebarParents = $('#sidebar').parents();
  console.log(sidebarParents);

  $('#sidebarP').click(e => {
    console.log('p inside sidebar clicked');
    // e.stopPropagation(); // executed events if there are multiple events on the same element.
    e.stopImmediatePropagation(); // prevents another event on the same element from running. see just below code, which won't execute
  });
  $('#sidebarP').click(e => {
    console.log('another action for the same element');
  });

  $('#sidebar').click(() => console.log('Clicked Sidebar'));
});

/*
1. Identification - whatever you can do in css can be done from js. Eg: .class, #id, #id1 > #id2

.empty() - erases content
.hide() - like display: none in css
.show() - show it
.remove() - removes the element
$('#b').val("This is the new button name").click(event....)   => USE THIS APPROACH


NOT TO DO THIS APPROACH:
jQueryObject.on(‘event’ , function); //jQuery way

*/

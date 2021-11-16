$(document).ready(function () {
  //when user typing in new tweet form
  $('.new-tweet-form-textarea').on('input', event => {
    const textLength = event.target.value;

    // show the remaing characters to type
    const remainingCounter = $('.new-tweet-form-output').text(
      `${140 - textLength.length}`
    );

    // change counter color accodring to the remaining counter
    if (remainingCounter.val() < 0) {
      $('.new-tweet-form-output').css({ color: 'red' });
    }
    if (remainingCounter.val() >= 0) {
      $('.new-tweet-form-output').css({ color: 'unset' });
    }
  });
});

$(document).ready(function () {
  //when user typing in new tweet form
  $('.new-tweet-form-textarea').on('input', event => {
    const textLength = event.target.value;

    // show the remaing characters to type
    const remainingCounter = $('.new-tweet-form-output').text(
      `${140 - textLength.length}`
    );

    // change counter color accodring to the remaining counter value
    const counterValue = remainingCounter.val();
    if (counterValue < 0) {
      $('.new-tweet-form-output').css({ color: 'red' });
    } else {
      $('.new-tweet-form-output').css({ color: 'unset' });
    }
  });

  // event listener upon scrolling
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll !== 0) {
      $('.button-to-top').addClass('appear');
    }
    if (scroll === 0) {
      $('.button-to-top').removeClass('appear');
    }
    if (scroll > 120) {
      $('.nav').addClass('nav-hide');
    }
    if (scroll <= 120) {
      $('.nav').removeClass('nav-hide');
    }
  });

  // scroll to the top upon bottom button click
  $('.button-to-top').on('click', () => {
    $(window).scrollTop(0);
  });
});

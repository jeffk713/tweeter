const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function () {
  // create a new tweet
  const createTweetElement = tweetData =>
    $(
      `<article class='existing-tweet'>
      <header>
        <span>
          <img src=${tweetData.user.avatars} alt='pic' />
          <span>
          ${tweetData.user.name}
          </span>
        </span>
        <span>${tweetData.user.handle}</span>
      </header>
      <main>
        <p>${escape(tweetData.content.text)}</p>
      </main>
      <footer>
        <span>${timeago.format(tweetData.created_at)}</span>
        <span>
          <i class='fas fa-flag'></i>
          <i class='fas fa-retweet'></i>
          <i class='fas fa-heart'></i>
        </span>
      </footer>
    </article>`
    );

  // append tweets to .tweets-container
  const renderTweets = tweets => {
    for (const tweet of tweets) {
      const tweetToAdd = createTweetElement(tweet);
      $('.tweets-container').prepend(tweetToAdd);
    }
  };

  // load tweets
  const loadTweets = () => {
    // create GET ajax request to bring tweets
    return $.ajax({ type: 'GET', url: '/tweets' }).then(tweets =>
      renderTweets(tweets)
    );
  };

  // create POST ajax request upon submit
  $('.new-tweet-form').on('submit', event => {
    event.preventDefault();

    // when the MAX number of letters is exceeded
    const remainingCounter = $('.counter').val();
    if (remainingCounter < 0) {
      return alert('tweet is too long');
    }

    const queryString = $(event.target).serialize();

    //extract user input from queryString
    const input = queryString.replace('text=', '');
    // when input is empty string or null
    if (!input) {
      return alert('please input');
    }

    // create POST request
    $.ajax({ type: 'POST', url: '/tweets', data: queryString })
      .then(res => {
        // clear input field and load tweets
        $('#tweet-text').val('');
        loadTweets();
      })
      .catch(error => alert(error.message));
  });

  // laodTweets at initial render
  loadTweets();
});

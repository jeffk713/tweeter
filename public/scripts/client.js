// Fake data taken from initial-tweets.json
const mockUser = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
];

$(document).ready(function () {
  // create a new tweet
  const createTweetElement = tweetData =>
    $(
      `<article class='existing-tweet'>
      <header>
        <span>
          ${tweetData.user.avatars} ${tweetData.user.name}
        </span>
        <span>${tweetData.user.handle}</span>
      </header>
      <main>
        <p>${tweetData.content.text}</p>
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
      $('.tweets-container').append(tweetToAdd);
    }
  };

  renderTweets(mockUser);
});

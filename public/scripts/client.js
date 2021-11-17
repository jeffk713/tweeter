const mockUser = {
  user: {
    name: 'Newton',
    avatars: 'https://i.imgur.com/73hZDYK.png',
    handle: '@SirIsaac',
  },
  content: {
    text: 'If I have seen further it is by standing on the shoulders of giants',
  },
  created_at: 1461116232227,
};

$(document).ready(function () {
  // const $tweet = $(`<article class="tweet">Hello world</article>`);

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
        <span>${tweetData.created_at}</span>
        <span>
          <i class='fas fa-flag'></i>
          <i class='fas fa-retweet'></i>
          <i class='fas fa-heart'></i>
        </span>
      </footer>
    </article>`
    );

  const $tweet = createTweetElement(mockUser);

  console.log($tweet);
  $('.tweets-container').append($tweet);
});

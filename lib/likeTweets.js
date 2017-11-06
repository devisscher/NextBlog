//const dotenv = require('dotenv').config();
const OAuth = require('OAuth');
var Twitter = require('twitter');
const {
  TWITTER_KEY,
  TWITTER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET
} = process.env;

var client = new Twitter({
  consumer_key: TWITTER_KEY,
  consumer_secret: TWITTER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_TOKEN_SECRET
});
var params = { screen_name: 'devisscher' };
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  TWITTER_KEY,
  TWITTER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

exports.likeTweets = () => {
  const subjects = [
    'node.js',
    'react.js',
    'meteor.js',
    'next.js',
    'now.sh',
    'zeit.co'
  ];
  for (var index = 0; index < subjects.length; index++) {
    var element = subjects[index];
    console.log(element);
    getTweets(element);
  }
};

getTweets = subject => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${subject}`,
    TWITTER_ACCESS_TOKEN,
    TWITTER_TOKEN_SECRET,
    function(error, data, response) {
      if (error) console.error(error);
      data = JSON.parse(data);
      console.log(data.statuses.length);
      const statuses = data.statuses;
      statuses.map(status => {
        like(status.id_str);
      });
    }
  );
};

like = id => {
  console.log(`liking: ${id}`);
  client.post(
    `https://api.twitter.com/1.1/favorites/create.json?id=${id}`,
    params,
    function(error, tweet, response) {
      if (error) {
        console.log(error);
      }
      console.log('done');
    }
  );
};

//getTweets();

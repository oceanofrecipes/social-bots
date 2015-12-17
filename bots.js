var Twitter = require('twitter');
var request = require('request');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var url = 'http://www.oceanofrecipes.com/?json=get_posts&orderby=rand&count=1';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var wpResponse = JSON.parse(body);
    var message = wpResponse.posts[0].title + ': ' + wpResponse.posts[0].url;
    client.post('statuses/update', {status: message},  function(error, tweet, response){
      if(error) throw error;
    });
  }
});

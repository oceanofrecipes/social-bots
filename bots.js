var Twitter = require('twitter');
var request = require('request');

var client = new Twitter({
  consumer_key: 'IXwc8vucJCStaJJ4kbiaViCoX',
  consumer_secret: 'Xa42H9sthvtb1aFjCZLTQzXAoKaKmA0G8hNVrUORf9M2KHMPvQ',
  access_token_key: '268476412-zh1ZsMKMnJG02x5LodRXXi1IXPWtycigHTe3qolz',
  access_token_secret: 'HC5nA8ZzelHQaNm43W8NkcCIWkwNruyAHi2XspkZAVsua'
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

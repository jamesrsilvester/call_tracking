const express = require('express');
const VoiceResponse =require('twilio').twiml.VoiceResponse;
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  // twiml.say('hello. Say something different next time
  twiml.say({ voice: 'alice' }, 'Hello from James. This message is awaiting customization');
  twiml.play('https://agile-sands-23686.herokuapp.com/boom2.mp3');
  response.type('text/xml');
  response.send(twiml.toString());
});

app.post('/outgoing', (request, response) => {
  const twiml = new VoiceResponse();
  // twiml.say('hello. Say something different next time
  twiml.say({ voice: 'alice' }, 'Hello John. This is Henry the cat. I have always loved your friend Dan more than you. I miss him, but I do not miss you. Chi Chi says she also feels the same, by the way.');
  response.type('text/xml');
  response.send(twiml.toString());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

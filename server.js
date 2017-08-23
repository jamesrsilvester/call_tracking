const express = require('express');
const VoiceResponse =require('twilio').twiml.VoiceResponse;
const app = express();

app.set('port', (process.env.PORT || 5000));



app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  // twiml.say('hello. Say something different next time
  twiml.say({ voice: 'alice' }, 'hello world!');
  twiml.play('https://api.twilio.com/Cowbell.mp3');
  response.type('text/xml');
  response.send(twiml.toString());
});

// app.listen(1337);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

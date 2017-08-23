const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  // twiml.say('hello. Say something different next time
  twiml.say({ voice: 'alice' }, 'hello world!');
  twiml.play('https://api.twilio.com/Cowbell.mp3');
  response.type('text/xml');
  response.send(twiml.toString());
});

app.listen(1337);

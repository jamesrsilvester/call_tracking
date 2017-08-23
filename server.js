const express = require('express');
const VoiceResponse =require('twilio').twiml.VoiceResponse;
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// // At the top of your web.js
// process.env.PWD = process.cwd()
//
// // Then
// app.use(express.static(process.env.PWD + 'public'));

app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  // twiml.say('hello. Say something different next time
  twiml.say({ voice: 'alice' }, 'Hello there. This message is awaiting customization. And now, some Cowbell.');
  twiml.play('https://agile-sands-23686.herokuapp.com/media/boom2.mp3');
  response.type('text/xml');
  response.send(twiml.toString());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

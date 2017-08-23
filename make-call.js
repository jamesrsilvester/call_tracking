let accountSid = 'AC11f13cd97c534b4f12cdcf4960c89b70'
let authToken = '2d755bae3c32cd76434d2f3ffb2f17e0'

// from video:
// let accountSid = process.env.TWILIO_ACCOUNT_SID;
// let authToken = process.env.TWILIO_AUTH_TOKEN;

let client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: 'https://agile-sands-23686.herokuapp.com/outgoing',
  to: '+18189289221',
  from: '+14158554158 '
}, function(err, call) {
  if(err) {
    console.log(err, "call attempt failed");
  } else {
    console.log(call.sid, "call attempt was succesful");
  }
})

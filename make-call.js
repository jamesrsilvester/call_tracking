let accountSid = 'ACda3d94655478152b57159dada50559fd'
let authToken = 'dcecb26cf29d32892b7baa9957657253'

// from video:
// let accountSid = process.env.TWILIO_ACCOUNT_SID;
// let authToken = process.env.TWILIO_AUTH_TOKEN;

let client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: 'https://agile-sands-23686.herokuapp.com/outgoing.xml',
  to: '+19175965245',
  from: '+16282276015'
}, function(err, call) {
  if(err) {
    console.log(err, "call attempt failed");
  } else {
    console.log(call.sid, "call attempt was succesful");
  }
})

// The functions in this file are in server.js
// this file is not needed

// Theoretically, we want our message (twiml) to direct a call 
// the police. We were missing a feature where the user inputs their 
// address. 

// The twilio should send a message asking for help to the location
// the user inputs. The call is directed to my phone number because 
// this is a prototype and should not actually call the police.

var accountSid = 'AC0e2f38c93c2c31de8d70122dea8b6e38';
var authToken = '270ca4e74f2fadf4d7540909429af20a';

var client = require('twilio')(accountSid, authToken);

client.calls.create({
	url: 'https://handler.twilio.com/twiml/EH6e0519094bf173f8c8212a81fa92a8a1',
	to: '+14088386939', //supposed to be 911 but don't want to call them on accident
	from: '+16503341079'
})
  .then(call => process.stdout.write(call.sid));
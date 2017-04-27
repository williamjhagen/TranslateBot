//var restify = require('restify');
var builder = require('botbuilder');
var MsTranslator = require('mstranslator');

//=========================================================
// Bot Setup
//=========================================================

//Setup Restify Server
/*=========================================================
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
*///=======================================================

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
	console.log(session);
	var params = {
	  text: session.message.text,
	  from: 'en',
	  to: 'ko'
	};
	console.log("params made");
		// new token API
	var client = new MsTranslator({
	  api_key: "4287043bb14045e98ad21369e4a6bd7b" // use this for the new token API. 
	}, true);
	console.log("client made");

	client.initialize_token(function(){
	  client.translate(params, function(err, data) {
			console.log("data: " + data);
	    	if (err) console.log('error:' + err.message);
	    	session.send(data)
	    	console.log("data sent");
		});
	});
});
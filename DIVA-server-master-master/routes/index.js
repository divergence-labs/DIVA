var express = require('express');
var router = express.Router();
//var speechSentiment = require('../src/services/sentimetalAnalyser');
var botEmotions = require('../src/services/botEmotions');
var guestSignup = require('../src/services/divaGuestSignup');
var apiai = require('apiai');
var request = require('request');
require('dotenv').config()


//*****************************Integrating with google dialogflow NLP engine*************************
router.post('/speech', (req, res) => {
    var speech = `${req.body.voice}`;
    console.log("message receving from cleint to server "+speech)
    if(speech != null){
    var app = apiai(process.env.GOOGLE_DIALOGFLOW_CLIENT_KEY);
    var request = app.textRequest(speech, {
        sessionId: 'diva'
    }); 
    request.on('response', function(response) {
        console.log(response.result.fulfillment.speech);
        switch (response.result.action) {
            case 'input.unknown':
            botEmotions.expressEmotions("#F44336");
              break;
            case 'smalltalk.agent.annoying':
            botEmotions.expressEmotions("#FFAB00");
              break;
            case 'jokes.get':
            botEmotions.expressEmotions("#64DD17");
              break;
            case 'smalltalk.agent.acquaintance':
            botEmotions.expressEmotions("#64DD17");
              break;
            case 'smalltalk.agent.age':
            botEmotions.expressEmotions("#FFAB00");
              break;
            case 'smalltalk.agent.fired':
            botEmotions.expressEmotions("#FFAB00");
              break;
            case 'smalltalk.emotions.ha_ha':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.emotions.wow':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.greetings.how_are_you':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.greetings.nice_to_meet_you':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.greetings.nice_to_see_you':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.greetings.nice_to_talk_to_you':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.agent.boring':
            botEmotions.expressEmotions("#F44336");
            break;
            case 'smalltalk.agent.sure':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.agent.right':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.agent.marry_user':
            botEmotions.expressEmotions("#F44336");
            break;
            case 'smalltalk.agent.happy':
            botEmotions.expressEmotions("#64DD17");
            break;
            case 'smalltalk.agent.funny':
            botEmotions.expressEmotions("#64DD17");
            break;
            default:
            botEmotions.expressEmotions("#FFEB3B");
          }
          // if(response.result.action == "guest.signup.experience"){
          //   // guestSignup.notificationPush();
          // }
          if(response.result.action == "divergenceguestsignup.divergenceguestsignup-yes"){
            
            guestSignup.notificationPush();
            guestSignup.removeGuestCheckInStatus();

          }
        res.send(response.result.fulfillment.speech);
    });
    request.on('error', function(error) {
        console.log(error);
    }); 
    request.end();
    }
});
//*******************************************End of Service*******************************************

//*****************************Integrating with Sentimental analyser**********************************
/*router.post('/sentimental', (req, res) => {
    var speech_text = `${req.body.speech}`;
    if(speech_text != null){
    speechSentiment.analyseSentiments(speech_text);
    }
});*/
//*******************************************End of Service*******************************************
module.exports = router;

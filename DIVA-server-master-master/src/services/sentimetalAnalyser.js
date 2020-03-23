var request = require('request');
require('dotenv').config()
module.exports = {
    analyseSentiments: function (speech) {
    let utterances = { "documents": [{ "id": "1", "language": "en", "text": speech }]};
    var options1 = {
        uri: "https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
        headers: {
            'Ocp-Apim-Subscription-Key' : process.env.AZURE_TEXT_ANALYTICS_SENTIMENTAL_KEY,
            'Content-Type': "application/json"
          },
          body: JSON.stringify (utterances)
      };
     
      request.post(options1, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }
        let score = JSON.parse(response.body);
        let analysedScore = score.documents[0].score;
       this.sendSentimentScore(analysedScore);
        console.log("score"+ analysedScore);
        });
    },
    sendSentimentScore: function (sentiment_score){
        let sentiment_score_request = { "score": sentiment_score};
        var options2 = {
            uri: "https://sentimentbulbglow.azurewebsites.net/api/Function1?code=vDzU3CXsD01JiEq1WWRajJaIdYvL7q70uY0sXhfW6YWaQwO2u/V/Ww==",
            headers: {
                'Content-Type': "application/json"
              },
              body: JSON.stringify (sentiment_score_request)
          };
         
          request.post(options2, (error, response, body) => {
            if (error) {
                console.log('Error: ', error);
                return;
            }
            let jsonResponse2 = response.body;
            console.log(jsonResponse2);
        });

    }
};
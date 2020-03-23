var request = require('request');
module.exports = {

    expressEmotions: function (color_code){
        let color_code_request = { "value1": color_code};
        var options = {
            uri: "https://maker.ifttt.com/trigger/SentimentBulb/with/key/d-1aJ02kqfbfGB2kLx3LYhCbtlfooq4QOs7YSLHpwyu",
            headers: {
                'Content-Type': "application/json"
              },
              body: JSON.stringify (color_code_request)
          };
         
          request.post(options, (error, response, body) => {
            if (error) {
                console.log('Error: ', error);
                return;
            }
            let jsonResponse2 = response.body;
            console.log(jsonResponse2);
        });

    }
};
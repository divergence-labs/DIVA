var request = require('request');
var FCM = require('fcm-node');
require('dotenv').config()
module.exports = {
    notificationPush:function(){

        var serverKey = process.env.FIREBASE_SERVER_KEY;
        var fcm = new FCM(serverKey);
        var token = process.env.FCM_TOKEN;
        var message = {
            to: token,
            collapse_key: 'your_collapse_key',
            notification: {title: 'Divergence-Lab', body: 'Greeting from DIVA'},
            data: {my_key: 'my value', contents: "abcv/"}
        };
        fcm.send(message, function (err, response) {
            if (err) {
                //res.json({status: 0, message: err});
            } else {
                //res.json({status: 1, message: response});
            }
        });
    },

   
    getGuestCheckInStatus: function (){
        var options = {
            uri: "https://diva-guest-experience.azurewebsites.net/visitors/checkIn/list",
            headers: {
                'Content-Type': "application/json"
              }
            };
         
          request.get(options, (error, response) => {
            if (error) {
                console.log('Error: ', error);
                return;
            }
            let jsonResponse2 = response.length;
            console.log("progress status"+jsonResponse2);
        });

    },
    removeGuestCheckInStatus: function (){
        var options = {
            uri: "https://diva-guest-experience.azurewebsites.net/visitors/checkIn/removeAll",
            headers: {
                'Content-Type': "application/json"
              }
          };
         
          request.delete(options, (error, response) => {
            if (error) {
                console.log('Error: ', error);
                return;
            }
            let jsonResponse2 = response;
            console.log("progress Status removed"+jsonResponse2);
        });

    }
    
};
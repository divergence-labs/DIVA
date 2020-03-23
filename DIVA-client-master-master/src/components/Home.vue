<template>
  <div>
    <video autoplay muted loop id="myVideo">
      <source src="../assets/videos/back.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>

  <div class="maincontent">
    <div class="img_content">
      <!-- <img id="mainlogo" width="300px" height="120px" src="../assets/images/divergence_logo.png"/> -->
    </div>
    <div id="content"> 
      <!-- <h1>Hi, I am DIVA!</h1> -->
      <br/>
      <!-- <img id="logo" width="130px" height="150px" src="../assets/images/diva.png"/> -->
      <div id="boxContainer" class="a" style="--n: 5;">
        <div class="dot" style="--i: 0;"></div>
        <div class="dot" style="--i: 1;"></div>
        <div class="dot" style="--i: 2;"></div>
        <div class="dot" style="--i: 3;"></div>
        <div class="dot" style="--i: 4;"></div>
      </div>
      <br/>
      <div class="center">
        <p id="tagline">I am a virtual receptionist
        <br>
        <br>
        Say “Hey Diva” to begin talking to me</p>
      </div>
      

      <ul class="timeline_left" v-chat-scroll >
        <li class="event_left"    v-for="(user,u) in reversedArr1" :key="u">
          <p>  {{ user }}</p>
        </li>
      </ul>

      <ul id="tt" class="timeline" v-chat-scroll >
        <li class="event"   v-for="(message,m) in reversedArr" :key="m">
          <p>{{ message }} </p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import $ from "jquery"
var dateFormat = require('dateformat');
export default {
  name: 'Home',
     data: function() {
    return  {
      message: "",
      user:"",
      messages: [],
      statename:[],
      fsmile:"",
      fage:"",
      fgender:"",
      fglasses:"",
      fanger:"",
      fcontempt:"",
      fdisgust:"",
      ffear:"",
      fhappiness:"",
      fneutral:"",
      fsadness:"",
      fsurprise:"",
      feyeMakeup:"",
      flipMakeup:"",
      fpitch:"",
      froll:"",
      fyaw:"",
      fmoustache:"",
      fbeard:"",
      fsideburns:"",
      fblurLevel:"",
      fexposureLevel:"",
      fnoiseLevel:"",
      fforeheadOccluded:"",
      feyeOccluded:"",
      fmouthOccluded:"",
      fbald:"",
      finvisible:""
      }
    },
    computed: {
      //Chat Top Scroll mechanism
    reversedArr() {
      return this.messages.slice().reverse()
    },
     reversedArr1() {
      return this.statename.slice().reverse()
    }
  },
    methods:{
      //Chat UI updated when user initated the Conversartion
     Usersend: function(msg) {
          this.messages.push(msg)
          this.message = ""         
          this.statename.push('Human')
          this.user = ""
        },
        
      //Chat UI updated when BOT initated the Conversartion
        Botsend: function(msg) {
          this.messages.push(msg)
          this.message = "" 
          this.statename.push('DIVA')
          this.user = ""
        },

        //Chat speech
        speech: function(voicemsg,voicecmd){
              var voices = window.speechSynthesis.getVoices();
              const worte = new SpeechSynthesisUtterance(voicemsg)
              worte.default = false;
              worte.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)';})[0];
              worte.lang = 'en-US'
              window.speechSynthesis.speak(worte);
              worte.onend = function(event) {
                    $('#boxContainer').fadeIn()
                    annyang.addCommands(voicecmd),
                    annyang.resume()
            }
        },

        // wake word speech controll
         wakespeech: function(voicemsg){
              var voices = window.speechSynthesis.getVoices();
              const worte = new SpeechSynthesisUtterance(voicemsg)
              worte.default = false;
              worte.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];
              worte.lang = 'en-US'
              window.speechSynthesis.speak(worte);
        },

        //beepsound for wake word 
        BeepSound: function(){
          var source = "../static/ding.wav"
          var audio = document.createElement("audio");
          audio.autoplay = true;
          audio.load()
          audio.addEventListener("load", function() { 
          audio.play(); 
          }, true);
          audio.src = source;
        }, 

        //beepsound for wake word time out
         timeoutSound: function(){
          var source = "../static/dong.wav"
          var audio = document.createElement("audio");
          audio.autoplay = true;
          audio.load()
          audio.addEventListener("load", function() { 
          audio.play(); 
          }, true);
          audio.src = source;
        },

        // initital animation collapse
        wakecollapse: function(){
          $('#logo').hide();
          $('#mainlogo').hide();
         $('#tagline').hide();
         $('#taglinetext').hide();
        },

        // initital animation expand
        wakeexpand: function(){
          $('#tt').fadeIn();
          $('#boxContainer').fadeIn()
        },

        // good bye speech controll
         goodbyespeech: function(voicemsg,vccmd){
              var voices = window.speechSynthesis.getVoices();
              const worte = new SpeechSynthesisUtterance(voicemsg)
              worte.default = false;
              worte.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];
              worte.lang = 'en-US'
              window.speechSynthesis.speak(worte);
              worte.onend = function(event) {
                    $('#boxContainer').fadeOut()
                    annyang.addCommands(vccmd),
                    annyang.resume()
            },
            setTimeout(function(){ 
              location.reload();
            }, 6000);
        },

      //Face Analyser and Microsoft Cognitive API Calls
      capture:function(){
         const self = this
         // take snapshot and get image data
          var videoId = 'video';
          var scaleFactor = 0.25;
          if(scaleFactor == null){
            scaleFactor = 1;
          }
          var w = video.videoWidth * scaleFactor;
          var h = video.videoHeight * scaleFactor;
          var canvas = document.createElement('canvas');
            canvas.width  = w;
            canvas.height = h;
          var ctx = canvas.getContext('2d');
             ctx.drawImage(video, 0, 0, w, h);
          let data = canvas.toDataURL('image/jpeg');
          //API Call
           fetch(data)
              .then(res => res.blob())
                .then(blobData => {
                   var params = {
                     "returnFaceId": "true",
                     "returnFaceLandmarks": "false",
                     "returnFaceAttributes":
                     "age,gender,headPose,smile,facialHair,glasses,emotion," +
                     "hair,makeup,occlusion,accessories,blur,exposure,noise"
                  };
                $.post({
                  url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect"+ "?" + $.param(params),
                  contentType: "application/octet-stream",
                  headers: {
                    'Ocp-Apim-Subscription-Key': '8b080381339d48dea64318ff1817ce87'
                  },
                  processData: false,
                  data: blobData
                })
                .done(function(data) {  
                  // console.log(JSON.stringify(data,null,2));
                if(typeof data !== 'undefined' && data.length > 0){
                self.speech("scan complete");
                this.fsmile =  data[0].faceAttributes.smile;
                this.fage =  data[0].faceAttributes.age;
                this.fgender =  data[0].faceAttributes.gender;
                this.fglasses =  data[0].faceAttributes.glasses;
                this.fanger =  data[0].faceAttributes.emotion.anger;
                this.fdisgust =  data[0].faceAttributes.emotion.disgust;
                this.fcontempt =  data[0].faceAttributes.emotion.contempt;
                this.ffear =  data[0].faceAttributes.emotion.fear;
                this.fhappiness =  data[0].faceAttributes.emotion.happiness;
                this.fsadness =  data[0].faceAttributes.emotion.sadness;
                this.fsurprise =  data[0].faceAttributes.emotion.surprise;
                this.fneutral =  data[0].faceAttributes.emotion.neutral;
                this.feyeMakeup =  data[0].faceAttributes.makeup.eyeMakeup;
                this.flipMakeup =  data[0].faceAttributes.makeup.lipMakeup;
                this.fpitch =  data[0].faceAttributes.headPose.pitch;
                this.froll =  data[0].faceAttributes.headPose.roll;
                this.fyaw =  data[0].faceAttributes.headPose.yaw;
                this.fmoustache =  data[0].faceAttributes.facialHair.moustache;
                this.fbeard =  data[0].faceAttributes.facialHair.beard;
                this.fsideburns =  data[0].faceAttributes.facialHair.sideburns;
                this.fblurLevel =  data[0].faceAttributes.blur.blurLevel;
                this.fexposureLevel =  data[0].faceAttributes.exposure.exposureLevel;
                this.fnoiseLevel =  data[0].faceAttributes.noise.noiseLevel;
                this.fforeheadOccluded =  data[0].faceAttributes.occlusion.foreheadOccluded;
                this.feyeOccluded =  data[0].faceAttributes.occlusion.eyeOccluded;
                this.fmouthOccluded =  data[0].faceAttributes.occlusion.mouthOccluded;
                this.fbald =  data[0].faceAttributes.hair.bald;
                this.finvisible =  data[0].faceAttributes.hair.invisible;

                let score_smile = this.fsmile * 100;
                let score_anger = this.fanger * 100;
                let score_contempt = this.fcontempt * 100;
                let score_disgust = this.fdisgust * 100;
                let score_fear = this.ffear * 100;
                let score_sadness = this.fsadness * 100;
                let score_neutral = this.fneutral * 100;
                let score_happiness = this.fhappiness * 100;
                let score_surprise = this.fsurprise * 100;

                               
                //Overlay the Face Demographics data on Video Canvas
                document.getElementById('ofasmile_val').innerHTML  = Math.round(score_smile)+"%"; 
                var e1 = document.getElementById('ofasmile');
                e1.style.width = Math.round(score_smile)+"%";
                document.getElementById('ofagender').innerHTML  =  this.fgender;
                document.getElementById('ofaage').innerHTML  =  this.fage;
                document.getElementById('ofaglasses').innerHTML  =  this.fglasses;

                 document.getElementById('ofaanger_val').innerHTML  = Math.round(score_anger)+"%"; 
                var e2 = document.getElementById('ofaanger');
                e2.style.width = Math.round(score_anger)+"%";

                 document.getElementById('ofacontempt_val').innerHTML  = Math.round(score_contempt)+"%"; 
                var e3 = document.getElementById('ofacontempt');
                e3.style.width = Math.round(score_contempt)+"%";

                 document.getElementById('ofadisgust_val').innerHTML  = Math.round(score_disgust)+"%"; 
                var e4 = document.getElementById('ofadisgust');
                e4.style.width = Math.round(score_disgust)+"%";

                 document.getElementById('ofafear_val').innerHTML  = Math.round(score_fear)+"%"; 
                var e5 = document.getElementById('ofafear');
                e5.style.width = Math.round(score_fear)+"%";

                 document.getElementById('ofahappiness_val').innerHTML  = Math.round(score_happiness)+"%"; 
                var e6 = document.getElementById('ofahappiness');
                e6.style.width = Math.round(score_happiness)+"%";

                 document.getElementById('ofaneutral_val').innerHTML  = Math.round(score_neutral)+"%"; 
                var e7 = document.getElementById('ofaneutral');
                e7.style.width = Math.round(score_neutral)+"%";

                 document.getElementById('ofasadness_val').innerHTML  = Math.round(score_sadness)+"%"; 
                var e8 = document.getElementById('ofasadness');
                e8.style.width = Math.round(score_sadness)+"%";

                 document.getElementById('ofasurprise_val').innerHTML  = Math.round(score_surprise)+"%"; 
                var e9 = document.getElementById('ofasurprise');
                e9.style.width = Math.round(score_surprise)+"%";
      
                if(this.feyeMakeup == true){
                   document.getElementById('faeyeMakeup').innerHTML  =  "yes";
                }else{
                  document.getElementById('faeyeMakeup').innerHTML  =  "no";
                }
               if(this.flipMakeup == true){
                 document.getElementById('falipMakeup').innerHTML  =  "yes";
                }else{
                  document.getElementById('falipMakeup').innerHTML  =  "no";
                }
               
                document.getElementById('fapitch').innerHTML  =  this.fpitch;
                document.getElementById('faroll').innerHTML  =  this.froll;
                document.getElementById('fayaw').innerHTML  =  this.fyaw;
                document.getElementById('famoustache').innerHTML  =  this.fmoustache;
                document.getElementById('fabeard').innerHTML  =  this.fbeard;
                document.getElementById('fasideburns').innerHTML  =  this.fsideburns;
                document.getElementById('fablurLevel').innerHTML  =  this.fblurLevel;
                document.getElementById('faexposureLevel').innerHTML  =  this.fexposureLevel;
                document.getElementById('fanoiseLevel').innerHTML  =  this.fnoiseLevel;
                document.getElementById('fabald').innerHTML  =  this.fbald;
                 if(this.finvisible == true){document.getElementById('fainvisible').innerHTML  =   "yes";}else{document.getElementById('fainvisible').innerHTML  =    "no";}
                
                if(this.fforeheadOccluded == true){document.getElementById('faforeheadOccluded').innerHTML  =  "yes";}else{document.getElementById('faforeheadOccluded').innerHTML  =  "no";}
                 if(this.feyeOccluded == true){document.getElementById('faeyeOccluded').innerHTML   =  "yes";}else{document.getElementById('faeyeOccluded').innerHTML   = "no";}
                  if(this.fmouthOccluded == true){document.getElementById('famouthOccluded').innerHTML  = "yes";}else{document.getElementById('famouthOccluded').innerHTML  = "no";}
                }
                else{
                  self.speech("Looks like your face not recognized. Can you come near by camera and try to scan again.");
                }
              })
              .fail(function(err) {
                console.log(JSON.stringify(err));
              })
          });
        }
    },

    mounted: function() {   
    var voices = window.speechSynthesis.getVoices();
    $('#boxContainer').hide();
    $('#tt').hide();
    const self = this
    const hello_wakemsg = "Hello! How can I help you?";
    const hi_wakemsg = "Hi! How can I help you?";
    const hey_wakemsg = "Hey! How can I help you?";
    const sleep_msg = "Thanks, It was nice talking to you";
    //Defining voice Commands 
    if (annyang) {
      // voice command for conversation with DIVA
     var commands = {
       '(*tag)': (tag) => {
          var end_conversation = tag.toString().toLowerCase();
          // Conversation end
          if(end_conversation == 'goodbye')
          {
             $('#boxContainer').fadeOut();
             self.Botsend(sleep_msg);
             annyang.pause();
             annyang.removeCommands();
             self.goodbyespeech(sleep_msg,commands2); 
          }
          // main conversation initiated
         if (tag != null && end_conversation != 'goodbye'){
              self.Usersend(tag);
              console.log("messgae sending from client"+tag)
              // API call 
              axios.post('http://localhost:3000/speech', {
                voice:tag
              }).then((response) => {
              console.log(response.data);
              // API call End
              var botmsg = response.data.toString().toLowerCase();
              if(botmsg == 'diagnostic'){
                  self.$parent.analysisMode();
                   self.BeepSound();
                   annyang.pause();
                   annyang.removeCommands();
                   annyang.addCommands(commands3);
                   annyang.resume();
              }else if(botmsg == 'time'){
                 var now = new Date();
                 let system_time = dateFormat(now, "h:MM TT");
                 let bottime = "It\'s" +" "+ system_time;
                  $('#boxContainer').hide();
                  annyang.pause(); 
                  annyang.removeCommands();
                  self.Botsend(bottime);
                  self.speech(bottime,commands);
              }else if(botmsg == 'guest'){
                  $('#boxContainer').hide();
                  self.Botsend("Sure, did you get an email with the QRCode that I sent?");
                  self.speech("Sure, did you get an email with the QRCode that I sent?"); 
              }
              else if(botmsg == 'qrsuccess'){
                  $('#boxContainer').hide();
                  annyang.pause(); 
                  annyang.removeCommands();
                  self.Botsend("Great! Could you please scan your QRCode below?");
                  self.speech("Great! Could you please scan your QRCode below?",commands4); 
              }else if(botmsg == 'qrfail'){
                  $('#boxContainer').hide();
                  annyang.pause(); 
                  annyang.removeCommands();
                  self.Botsend("Well, I am sorry, I can't let you pass through.");
                  self.speech("Well, I am sorry, I can't let you pass through.",commands2); 
                   setTimeout(function(){ 
                   location.reload();
                   }, 3000);
              }else if(botmsg == 'checkout'){
                  $('#boxContainer').hide();
                  annyang.pause(); 
                  annyang.removeCommands();
                  self.Botsend("Oh so soon? I enjoyed hosting them. It will be great to have a feedback");
                  self.speech("Oh so soon? I enjoyed hosting them. It will be great to have a feedback"); 
                  setInterval(function(){
               axios.get('https://diva-guest-experience.azurewebsites.net/visitors/feedback/list').then((response) => {
                 let feedbackstatus = response.data.length;
                if(feedbackstatus === 1){ 
                   let feedbackres = response.data[0].status;
                if(feedbackres == 1){
                  self.Botsend("Thank you for the feedback. Have a great day");
             self.wakespeech("Thank you for the feedback. Have a great day");
               annyang.pause();
               annyang.removeCommands();
                  axios.delete('https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll').then((response) => {
               console.log(response.data); 
                annyang.addCommands(commands2),
               annyang.resume()
               setTimeout(function(){ 
                    location.reload();
                    }, 6000);
               })
             .catch((e) => {
               console.error(e)
             })
             
           }else if(feedbackres == 2){
             self.Botsend("Oh, thank you! We are glad you enjoyed your visit. Have a great day");
             self.wakespeech("Oh, thank you! We are glad you enjoyed your visit. Have a great day");
               annyang.pause();
               annyang.removeCommands();
                  axios.delete('https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll').then((response) => {
               console.log(response.data); 
                annyang.addCommands(commands2),
               annyang.resume()
               setTimeout(function(){ 
                    location.reload();
                    }, 6000);
               })
             .catch((e) => {
               console.error(e)
             })
             
           }else if(feedbackres == 3){
               self.Botsend("Oh, we appreciate very much for your valuable feedback!. Have a great day");
             self.wakespeech("Oh, we appreciate very much for your valuable feedback!. Have a great day");
               annyang.pause();
               annyang.removeCommands();
                  axios.delete('https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll').then((response) => {
               console.log(response.data); 
                annyang.addCommands(commands2),
               annyang.resume()
               setTimeout(function(){ 
                    location.reload();
                    }, 6000);
               })
             .catch((e) => {
               console.error(e)
             }) 
           }
           else{
                console.log("waiting for feedback");
           }
                }
                else{
                  console.log("waiting for feedback");
                }
             })
             .catch((e) => {
               console.error(e)
             }) }, 3000);
              }
              else{
                  $('#boxContainer').hide();
                  annyang.pause(); 
                  annyang.removeCommands();
                  self.Botsend(botmsg);
                   var voices = window.speechSynthesis.getVoices();
              const worte = new SpeechSynthesisUtterance(botmsg)
              worte.default = false;
              worte.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)';})[0];
              worte.lang = 'en-US'
              window.speechSynthesis.speak(worte);
              worte.onend = function(event) {
                    $('#boxContainer').fadeIn()
                    annyang.addCommands(commands),
                    annyang.resume()
            }
                  // Sentimental analyser API call 
                  /*axios.post('http://localhost:3000/sentimental', {
                    speech:tag
                  }).then((response) => {
                    console.log(response.data);
                  })
                  .catch((e) => {
                    console.error(e)
                  })*/
                  // API call End 
              }
            })
            .catch((e) => {
              console.error(e)
            })
          }
      }
    };
    //End of voice command
    // voice command to wake DIVA bot
    var commands2 = {
       'hey diva': function() {
         self.wakecollapse();
         self.BeepSound();  // To initiate beep sound when bot wake to listen mode
         self.wakeexpand();
         self.Botsend(hey_wakemsg);
         annyang.pause();
         annyang.removeCommands();
         self.wakespeech(hey_wakemsg);
         annyang.addCommands(commands),
         annyang.resume()
      },
       'hi diva': function() {
         self.wakecollapse();
         self.BeepSound();  // To initiate beep sound when bot wake to listen mode
         self.wakeexpand();
         self.Botsend(hi_wakemsg);
         annyang.pause();
         annyang.removeCommands();
         self.wakespeech(hi_wakemsg);
         annyang.addCommands(commands),
         annyang.resume()
      },
       'hello diva': function() {
         self.wakecollapse();
         self.BeepSound();  // To initiate beep sound when bot wake to listen mode
         self.wakeexpand();
         self.Botsend(hello_wakemsg);
         annyang.pause();
         annyang.removeCommands();
         self.wakespeech(hello_wakemsg);
         annyang.addCommands(commands),
         annyang.resume()
      }
    };
    //Handling face analysis mode
    var commands3 = {
       'scan': function() { 
          self.capture();
          self.wakespeech("performing scan");
       },
       'exit': function() { 
          self.$parent.landingMode();
          annyang.pause();
          annyang.removeCommands();
          annyang.addCommands(commands2);
          annyang.resume();
       }
    };
    //End of voice command

     var commands4 = {
       '(*tag1)': (tag1) => {
        axios.post('http://localhost:3000/speech', {
                voice:tag1
              }).then((response) => {
              console.log(response.data);
              // API call End
              var gbotmsg = response.data.toString().toLowerCase();
         if(gbotmsg =="checkqr"){
           axios.get('https://diva-guest-experience.azurewebsites.net/visitors/checkIn/list')
        .then(function (response) {
          let result = response.data.length;
          let res = response.data[0].visitorId;
          localStorage.setItem("visitorID",res);
          console.log(res)
          console.log(result);
          if(result === 1){
            self.wakespeech("Thank you, we welcome you to Divergene C3");
             self.$parent.GuestSignUpExperience();
              annyang.pause();
              annyang.removeCommands();
              annyang.addCommands(commands5),
              annyang.resume()
          }else{
            self.Botsend("Sorry, I'm not sure how to help. Maybe try asking a different way.");
             self.wakespeech("Sorry, I'm not sure how to help. Maybe try asking a different way.");
          }
          
      })
      .catch(function (error) {
         console.log(error);
        });
       }
       })
            .catch((e) => {
              console.error(e)
            })
          }
       };
        //End of voice command
       var commands5 = {
       'exit': function() { 
          self.$parent.landingMode();
          annyang.pause();
          annyang.removeCommands();
          annyang.addCommands(commands2);
          annyang.resume();
       }
    };

    // Add our commands to annyang
    annyang.addCommands(commands2);

    // Start listening.
    annyang.start({ autoRestart: true, continuous: false });
   // annyang.debug();
    }
  }
}
</script>
<style src="../assets/css/bootstrap.css" scoped>

</style>



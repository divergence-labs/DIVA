webpackJsonp([1],{ALhH:function(e,t,a){e.exports=a.p+"static/img/diva.2ddbabb.png"},J37t:function(e,t){},KaaW:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s=a("mvHQ"),i=a.n(s),o=a("mtWM"),r=a.n(o),d=a("7t+N"),c=a.n(d),l=a("CqLJ"),u={name:"Home",data:function(){return{message:"",user:"",messages:[],statename:[],fsmile:"",fage:"",fgender:"",fglasses:"",fanger:"",fcontempt:"",fdisgust:"",ffear:"",fhappiness:"",fneutral:"",fsadness:"",fsurprise:"",feyeMakeup:"",flipMakeup:"",fpitch:"",froll:"",fyaw:"",fmoustache:"",fbeard:"",fsideburns:"",fblurLevel:"",fexposureLevel:"",fnoiseLevel:"",fforeheadOccluded:"",feyeOccluded:"",fmouthOccluded:"",fbald:"",finvisible:""}},computed:{reversedArr:function(){return this.messages.slice().reverse()},reversedArr1:function(){return this.statename.slice().reverse()}},methods:{Usersend:function(e){this.messages.push(e),this.message="",this.statename.push("Human"),this.user=""},Botsend:function(e){this.messages.push(e),this.message="",this.statename.push("DIVA"),this.user=""},speech:function(e,t){var a=window.speechSynthesis.getVoices(),n=new SpeechSynthesisUtterance(e);n.default=!1,n.voice=a.filter(function(e){return"Microsoft Zira Desktop - English (United States)"==e.name})[0],n.lang="en-US",window.speechSynthesis.speak(n),n.onend=function(e){c()("#boxContainer").fadeIn(),annyang.addCommands(t),annyang.resume()}},wakespeech:function(e){var t=window.speechSynthesis.getVoices(),a=new SpeechSynthesisUtterance(e);a.default=!1,a.voice=t.filter(function(e){return"Microsoft Zira Desktop - English (United States)"==e.name})[0],a.lang="en-US",window.speechSynthesis.speak(a)},BeepSound:function(){var e=document.createElement("audio");e.autoplay=!0,e.load(),e.addEventListener("load",function(){e.play()},!0),e.src="../static/ding.wav"},timeoutSound:function(){var e=document.createElement("audio");e.autoplay=!0,e.load(),e.addEventListener("load",function(){e.play()},!0),e.src="../static/dong.wav"},wakecollapse:function(){c()("#logo").hide(),c()("#mainlogo").hide(),c()("#tagline").hide(),c()("#taglinetext").hide()},wakeexpand:function(){c()("#tt").fadeIn(),c()("#boxContainer").fadeIn()},goodbyespeech:function(e,t){var a=window.speechSynthesis.getVoices(),n=new SpeechSynthesisUtterance(e);n.default=!1,n.voice=a.filter(function(e){return"Microsoft Zira Desktop - English (United States)"==e.name})[0],n.lang="en-US",window.speechSynthesis.speak(n),n.onend=function(e){c()("#boxContainer").fadeOut(),annyang.addCommands(t),annyang.resume()},setTimeout(function(){location.reload()},6e3)},capture:function(){var e=this,t=.25;null==t&&(t=1);var a=video.videoWidth*t,n=video.videoHeight*t,s=document.createElement("canvas");s.width=a,s.height=n,s.getContext("2d").drawImage(video,0,0,a,n);var o=s.toDataURL("image/jpeg");fetch(o).then(function(e){return e.blob()}).then(function(t){c.a.post({url:"https://westus.api.cognitive.microsoft.com/face/v1.0/detect?"+c.a.param({returnFaceId:"true",returnFaceLandmarks:"false",returnFaceAttributes:"age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"}),contentType:"application/octet-stream",headers:{"Ocp-Apim-Subscription-Key":"8b080381339d48dea64318ff1817ce87"},processData:!1,data:t}).done(function(t){if(void 0!==t&&t.length>0){e.speech("scan complete"),this.fsmile=t[0].faceAttributes.smile,this.fage=t[0].faceAttributes.age,this.fgender=t[0].faceAttributes.gender,this.fglasses=t[0].faceAttributes.glasses,this.fanger=t[0].faceAttributes.emotion.anger,this.fdisgust=t[0].faceAttributes.emotion.disgust,this.fcontempt=t[0].faceAttributes.emotion.contempt,this.ffear=t[0].faceAttributes.emotion.fear,this.fhappiness=t[0].faceAttributes.emotion.happiness,this.fsadness=t[0].faceAttributes.emotion.sadness,this.fsurprise=t[0].faceAttributes.emotion.surprise,this.fneutral=t[0].faceAttributes.emotion.neutral,this.feyeMakeup=t[0].faceAttributes.makeup.eyeMakeup,this.flipMakeup=t[0].faceAttributes.makeup.lipMakeup,this.fpitch=t[0].faceAttributes.headPose.pitch,this.froll=t[0].faceAttributes.headPose.roll,this.fyaw=t[0].faceAttributes.headPose.yaw,this.fmoustache=t[0].faceAttributes.facialHair.moustache,this.fbeard=t[0].faceAttributes.facialHair.beard,this.fsideburns=t[0].faceAttributes.facialHair.sideburns,this.fblurLevel=t[0].faceAttributes.blur.blurLevel,this.fexposureLevel=t[0].faceAttributes.exposure.exposureLevel,this.fnoiseLevel=t[0].faceAttributes.noise.noiseLevel,this.fforeheadOccluded=t[0].faceAttributes.occlusion.foreheadOccluded,this.feyeOccluded=t[0].faceAttributes.occlusion.eyeOccluded,this.fmouthOccluded=t[0].faceAttributes.occlusion.mouthOccluded,this.fbald=t[0].faceAttributes.hair.bald,this.finvisible=t[0].faceAttributes.hair.invisible;var a=100*this.fsmile,n=100*this.fanger,s=100*this.fcontempt,i=100*this.fdisgust,o=100*this.ffear,r=100*this.fsadness,d=100*this.fneutral,c=100*this.fhappiness,l=100*this.fsurprise;document.getElementById("ofasmile_val").innerHTML=Math.round(a)+"%",document.getElementById("ofasmile").style.width=Math.round(a)+"%",document.getElementById("ofagender").innerHTML=this.fgender,document.getElementById("ofaage").innerHTML=this.fage,document.getElementById("ofaglasses").innerHTML=this.fglasses,document.getElementById("ofaanger_val").innerHTML=Math.round(n)+"%",document.getElementById("ofaanger").style.width=Math.round(n)+"%",document.getElementById("ofacontempt_val").innerHTML=Math.round(s)+"%",document.getElementById("ofacontempt").style.width=Math.round(s)+"%",document.getElementById("ofadisgust_val").innerHTML=Math.round(i)+"%",document.getElementById("ofadisgust").style.width=Math.round(i)+"%",document.getElementById("ofafear_val").innerHTML=Math.round(o)+"%",document.getElementById("ofafear").style.width=Math.round(o)+"%",document.getElementById("ofahappiness_val").innerHTML=Math.round(c)+"%",document.getElementById("ofahappiness").style.width=Math.round(c)+"%",document.getElementById("ofaneutral_val").innerHTML=Math.round(d)+"%",document.getElementById("ofaneutral").style.width=Math.round(d)+"%",document.getElementById("ofasadness_val").innerHTML=Math.round(r)+"%",document.getElementById("ofasadness").style.width=Math.round(r)+"%",document.getElementById("ofasurprise_val").innerHTML=Math.round(l)+"%",document.getElementById("ofasurprise").style.width=Math.round(l)+"%",1==this.feyeMakeup?document.getElementById("faeyeMakeup").innerHTML="yes":document.getElementById("faeyeMakeup").innerHTML="no",1==this.flipMakeup?document.getElementById("falipMakeup").innerHTML="yes":document.getElementById("falipMakeup").innerHTML="no",document.getElementById("fapitch").innerHTML=this.fpitch,document.getElementById("faroll").innerHTML=this.froll,document.getElementById("fayaw").innerHTML=this.fyaw,document.getElementById("famoustache").innerHTML=this.fmoustache,document.getElementById("fabeard").innerHTML=this.fbeard,document.getElementById("fasideburns").innerHTML=this.fsideburns,document.getElementById("fablurLevel").innerHTML=this.fblurLevel,document.getElementById("faexposureLevel").innerHTML=this.fexposureLevel,document.getElementById("fanoiseLevel").innerHTML=this.fnoiseLevel,document.getElementById("fabald").innerHTML=this.fbald,1==this.finvisible?document.getElementById("fainvisible").innerHTML="yes":document.getElementById("fainvisible").innerHTML="no",1==this.fforeheadOccluded?document.getElementById("faforeheadOccluded").innerHTML="yes":document.getElementById("faforeheadOccluded").innerHTML="no",1==this.feyeOccluded?document.getElementById("faeyeOccluded").innerHTML="yes":document.getElementById("faeyeOccluded").innerHTML="no",1==this.fmouthOccluded?document.getElementById("famouthOccluded").innerHTML="yes":document.getElementById("famouthOccluded").innerHTML="no"}else e.speech("Looks like your face not recognized. Can you come near by camera and try to scan again.")}).fail(function(e){console.log(i()(e))})})}},mounted:function(){window.speechSynthesis.getVoices();c()("#boxContainer").hide(),c()("#tt").hide();var e=this,t="Thanks, It was nice talking to you";if(annyang){var a={"(*tag)":function(o){var d=o.toString().toLowerCase();"goodbye"==d&&(c()("#boxContainer").fadeOut(),e.Botsend(t),annyang.pause(),annyang.removeCommands(),e.goodbyespeech(t,n)),null!=o&&"goodbye"!=d&&(e.Usersend(o),console.log("messgae sending from client"+o),r.a.post("http://localhost:3000/speech",{voice:o}).then(function(t){console.log(t.data);var o=t.data.toString().toLowerCase();if("diagnostic"==o)e.$parent.analysisMode(),e.BeepSound(),annyang.pause(),annyang.removeCommands(),annyang.addCommands(s),annyang.resume();else if("time"==o){var d=new Date,u="It's "+l(d,"h:MM TT");c()("#boxContainer").hide(),annyang.pause(),annyang.removeCommands(),e.Botsend(u),e.speech(u,a)}else if("guest"==o)c()("#boxContainer").hide(),e.Botsend("Sure, did you get an email with the QRCode that I sent?"),e.speech("Sure, did you get an email with the QRCode that I sent?");else if("qrsuccess"==o)c()("#boxContainer").hide(),annyang.pause(),annyang.removeCommands(),e.Botsend("Great! Could you please scan your QRCode below?"),e.speech("Great! Could you please scan your QRCode below?",i);else if("qrfail"==o)c()("#boxContainer").hide(),annyang.pause(),annyang.removeCommands(),e.Botsend("Well, I am sorry, I can't let you pass through."),e.speech("Well, I am sorry, I can't let you pass through.",n),setTimeout(function(){location.reload()},3e3);else if("checkout"==o)c()("#boxContainer").hide(),annyang.pause(),annyang.removeCommands(),e.Botsend("Oh so soon? I enjoyed hosting them. It will be great to have a feedback"),e.speech("Oh so soon? I enjoyed hosting them. It will be great to have a feedback"),setInterval(function(){r.a.get("https://diva-guest-experience.azurewebsites.net/visitors/feedback/list").then(function(t){if(1===t.data.length){var a=t.data[0].status;1==a?(e.Botsend("Thank you for the feedback. Have a great day"),e.wakespeech("Thank you for the feedback. Have a great day"),annyang.pause(),annyang.removeCommands(),r.a.delete("https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll").then(function(e){console.log(e.data),annyang.addCommands(n),annyang.resume(),setTimeout(function(){location.reload()},6e3)}).catch(function(e){console.error(e)})):2==a?(e.Botsend("Oh, thank you! We are glad you enjoyed your visit. Have a great day"),e.wakespeech("Oh, thank you! We are glad you enjoyed your visit. Have a great day"),annyang.pause(),annyang.removeCommands(),r.a.delete("https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll").then(function(e){console.log(e.data),annyang.addCommands(n),annyang.resume(),setTimeout(function(){location.reload()},6e3)}).catch(function(e){console.error(e)})):3==a?(e.Botsend("Oh, we appreciate very much for your valuable feedback!. Have a great day"),e.wakespeech("Oh, we appreciate very much for your valuable feedback!. Have a great day"),annyang.pause(),annyang.removeCommands(),r.a.delete("https://diva-guest-experience.azurewebsites.net/visitors/feedback/removeAll").then(function(e){console.log(e.data),annyang.addCommands(n),annyang.resume(),setTimeout(function(){location.reload()},6e3)}).catch(function(e){console.error(e)})):console.log("waiting for feedback")}else console.log("waiting for feedback")}).catch(function(e){console.error(e)})},3e3);else{c()("#boxContainer").hide(),annyang.pause(),annyang.removeCommands(),e.Botsend(o);var f=window.speechSynthesis.getVoices(),p=new SpeechSynthesisUtterance(o);p.default=!1,p.voice=f.filter(function(e){return"Microsoft Zira Desktop - English (United States)"==e.name})[0],p.lang="en-US",window.speechSynthesis.speak(p),p.onend=function(e){c()("#boxContainer").fadeIn(),annyang.addCommands(a),annyang.resume()}}}).catch(function(e){console.error(e)}))}},n={"hey Diva":function(){e.wakecollapse(),e.BeepSound(),e.wakeexpand(),e.Botsend("Hey! How can I help you?"),annyang.pause(),annyang.removeCommands(),e.wakespeech("Hey! How can I help you?"),annyang.addCommands(a),annyang.resume()},"hi Diva":function(){e.wakecollapse(),e.BeepSound(),e.wakeexpand(),e.Botsend("Hi! How can I help you?"),annyang.pause(),annyang.removeCommands(),e.wakespeech("Hi! How can I help you?"),annyang.addCommands(a),annyang.resume()},"hello Diva":function(){e.wakecollapse(),e.BeepSound(),e.wakeexpand(),e.Botsend("Hello! How can I help you?"),annyang.pause(),annyang.removeCommands(),e.wakespeech("Hello! How can I help you?"),annyang.addCommands(a),annyang.resume()}},s={scan:function(){e.capture(),e.wakespeech("performing scan")},exit:function(){e.$parent.landingMode(),annyang.pause(),annyang.removeCommands(),annyang.addCommands(n),annyang.resume()}},i={"(*tag1)":function(t){r.a.post("http://localhost:3000/speech",{voice:t}).then(function(t){console.log(t.data),"checkqr"==t.data.toString().toLowerCase()&&r.a.get("https://diva-guest-experience.azurewebsites.net/visitors/checkIn/list").then(function(t){var a=t.data.length,n=t.data[0].visitorId;localStorage.setItem("visitorID",n),console.log(n),console.log(a),1===a?(e.wakespeech("Thank you, we welcome you to Divergene C3"),e.$parent.GuestSignUpExperience(),annyang.pause(),annyang.removeCommands(),annyang.addCommands(o),annyang.resume()):(e.Botsend("Sorry, I'm not sure how to help. Maybe try asking a different way."),e.wakespeech("Sorry, I'm not sure how to help. Maybe try asking a different way."))}).catch(function(e){console.log(e)})}).catch(function(e){console.error(e)})}},o={exit:function(){e.$parent.landingMode(),annyang.pause(),annyang.removeCommands(),annyang.addCommands(n),annyang.resume()}};annyang.addCommands(n),annyang.start({autoRestart:!0,continuous:!1})}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[n("source",{attrs:{src:a("un5J"),type:"video/mp4"}}),e._v("\n        Your browser does not support HTML5 video.\n    ")]),e._v(" "),n("div",{staticClass:"maincontent"},[e._m(0),e._v(" "),n("div",{attrs:{id:"content"}},[n("h1",[e._v("Hi, I am DIVA!")]),e._v(" "),n("br"),e._v(" "),n("img",{attrs:{id:"logo",width:"130px",height:"150px",src:a("ALhH")}}),e._v(" "),e._m(1),e._v(" "),n("br"),e._v(" "),n("p",{attrs:{id:"tagline"}},[e._v("I am a virtual receptionist.")]),e._v(" "),n("p",{attrs:{id:"taglinetext"}},[e._v("Say “Hey Diva” to begin talking to me…")]),e._v(" "),n("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"timeline_left"},e._l(e.reversedArr1,function(t,a){return n("li",{key:a,staticClass:"event_left"},[n("p",[e._v("  "+e._s(t))])])})),e._v(" "),n("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"timeline",attrs:{id:"tt"}},e._l(e.reversedArr,function(t,a){return n("li",{key:a,staticClass:"event"},[n("p",[e._v(e._s(t)+" ")])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"img_content"},[t("img",{attrs:{id:"mainlogo",width:"300px",height:"120px",src:a("tjiq")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"a",staticStyle:{"--n":"5"},attrs:{id:"boxContainer"}},[t("div",{staticClass:"dot",staticStyle:{"--i":"0"}}),this._v(" "),t("div",{staticClass:"dot",staticStyle:{"--i":"1"}}),this._v(" "),t("div",{staticClass:"dot",staticStyle:{"--i":"2"}}),this._v(" "),t("div",{staticClass:"dot",staticStyle:{"--i":"3"}}),this._v(" "),t("div",{staticClass:"dot",staticStyle:{"--i":"4"}})])}]};var p=a("VU/8")(u,f,!1,function(e){a("z+Yf")},"data-v-569e321c",null).exports,m={name:"Diagnostic",data:function(){return{video:{},canvas:{}}},mounted:function(){var e=this;this.video=this.$refs.video,navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){return e.video.srcObject=t}).catch(function(e){return console.error(e)})}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"video-container"},[a("div",[a("video",{ref:"video",attrs:{id:"video",width:"750",height:"700",preload:"",autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),e._v(" "),e._m(1)])]),e._v(" "),a("canvas",{ref:"canvas",attrs:{id:"canvas",width:"320",height:"100"}})]),e._v(" "),e._m(2),e._v(" "),e._m(3)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"my-4"},[this._v("DIVA\n        "),t("small",[this._v("Face Analysis Mode")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"overlay-desc"},[t("ul",{staticStyle:{color:"white"}},[t("li",[t("span",[this._v("Gender - ")]),t("span",{attrs:{id:"ofagender"}})]),this._v(" "),t("li",[t("span",[this._v("Age - ")]),t("span",{attrs:{id:"ofaage"}})]),this._v(" "),t("li",[t("span",[this._v("Glasses - ")]),t("span",{attrs:{id:"ofaglasses"}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-4"},[a("h3",{staticStyle:{"text-align":"center",color:"white"}},[e._v('Just say "Scan" ')]),e._v(" "),a("div",{staticClass:"a",staticStyle:{"--n":"5","text-align":"center"},attrs:{id:"boxContainer"}},[a("div",{staticClass:"dot",staticStyle:{"--i":"0"}}),e._v(" "),a("div",{staticClass:"dot",staticStyle:{"--i":"1"}}),e._v(" "),a("div",{staticClass:"dot",staticStyle:{"--i":"2"}}),e._v(" "),a("div",{staticClass:"dot",staticStyle:{"--i":"3"}}),e._v(" "),a("div",{staticClass:"dot",staticStyle:{"--i":"4"}})]),e._v(" "),a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Emotions")]),e._v(" "),a("ul",{staticStyle:{color:"green","list-style-type":"none"}},[a("li",[e._v("😄 \n                    "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofasmile"}},[a("span",{attrs:{id:"ofasmile_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😠 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofaanger"}},[a("span",{attrs:{id:"ofaanger_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😯 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofacontempt"}},[a("span",{attrs:{id:"ofacontempt_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😏 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofadisgust"}},[a("span",{attrs:{id:"ofadisgust_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😰")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofafear"}},[a("span",{attrs:{id:"ofafear_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😊\t ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofahappiness"}},[a("span",{attrs:{id:"ofahappiness_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😐 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofaneutral"}},[a("span",{attrs:{id:"ofaneutral_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😞 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofasadness"}},[a("span",{attrs:{id:"ofasadness_val"}})])])]),a("br"),e._v(" "),a("li",[a("span",[e._v("😳 ")]),e._v(" "),a("div",{staticClass:"progress",staticStyle:{background:"rgb(128,128,128,0.3)"}},[a("div",{staticClass:"progress-bar progress-bar-striped",attrs:{id:"ofasurprise"}},[a("span",{attrs:{id:"ofasurprise_val"}})])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Makeup ")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("eyeMakeup - ")]),a("span",{attrs:{id:"faeyeMakeup"}})]),e._v(" "),a("li",[a("span",[e._v("lipMakeup - ")]),a("span",{attrs:{id:"falipMakeup"}})])])]),e._v(" "),a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Head Pose Confident score")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("pitch - ")]),a("span",{attrs:{id:"fapitch"}})]),e._v(" "),a("li",[a("span",[e._v("roll - ")]),a("span",{attrs:{id:"faroll"}})]),e._v(" "),a("li",[a("span",[e._v("yaw - ")]),a("span",{attrs:{id:"fayaw"}})])])]),e._v(" "),a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Facial Hair Confident score")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("moustache - ")]),a("span",{attrs:{id:"famoustache"}})]),e._v(" "),a("li",[a("span",[e._v("beard - ")]),a("span",{attrs:{id:"fabeard"}})]),e._v(" "),a("li",[a("span",[e._v("sideburns - ")]),a("span",{attrs:{id:"fasideburns"}})])])]),e._v(" "),a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Face Attribute Levels ")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("blurLevel - ")]),a("span",{attrs:{id:"fablurLevel"}})]),e._v(" "),a("li",[a("span",[e._v("exposureLevel - ")]),a("span",{attrs:{id:"faexposureLevel"}})]),e._v(" "),a("li",[a("span",[e._v("noiseLevel - ")]),a("span",{attrs:{id:"fanoiseLevel"}})])])]),e._v(" "),a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Hair Confident score")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("bald - ")]),a("span",{attrs:{id:"fabald"}})]),e._v(" "),a("li",[a("span",[e._v("invisible - ")]),a("span",{attrs:{id:"fainvisible"}})])])]),e._v(" "),a("div",{staticClass:"col-md-4 mb-5"},[a("p",{staticStyle:{color:"lightyellow",margin:"10px"}},[e._v("Occlusion")]),e._v(" "),a("ul",{staticStyle:{color:"lightgreen"}},[a("li",[a("span",[e._v("foreheadOccluded - ")]),a("span",{attrs:{id:"faforeheadOccluded"}})]),e._v(" "),a("li",[a("span",[e._v("eyeOccluded - ")]),a("span",{attrs:{id:"faeyeOccluded"}})]),e._v(" "),a("li",[a("span",[e._v("mouthOccluded - ")]),a("span",{attrs:{id:"famouthOccluded"}})])])])])}]};var v=a("VU/8")(m,h,!1,function(e){a("KaaW")},"data-v-c160e6e0",null).exports,g={name:"GuestWelcome",data:function(){return{info:null}},mounted:function(){var e=this;r.a.get("https://diva-guest-experience.azurewebsites.net/visitors/detail/check/"+localStorage.getItem("visitorID")).then(function(t){e.info=t.data[0].guestOrganizationLogo}).catch(function(e){console.error(e)})}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("video",{attrs:{playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[n("source",{attrs:{src:a("un5J"),type:"video/mp4"}})]),e._v(" "),n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("br"),e._v(" "),e._m(1),e._v(" "),n("br"),e._v(" "),n("div",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto",width:"50%"}},[n("div",[n("img",{attrs:{src:e.info,alt:""}})])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto",width:"50%"}},[t("img",{staticClass:"card-img-top",attrs:{src:a("tjiq"),alt:"Card image cap"}}),this._v(" "),t("br"),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center",color:"white"}},[t("h1",[this._v("Welcomes")])])}]};var b=a("VU/8")(g,y,!1,function(e){a("oKP2")},"data-v-08ffe4e5",null).exports,_=a("/ocq");n.default.use(_.a);var w=new _.a({routes:[{path:"/",name:"Home",component:p},{path:"/diagnostic",name:"Diagnostic",component:v},{path:"/guest",name:"GuestSignUp",component:b}],mode:"history"}),C={name:"App",components:{Home:p,Diagnostic:v},methods:{analysisMode:function(){w.push("/diagnostic")},landingMode:function(){w.push("/"),location.reload()},GuestSignUpExperience:function(){w.push("/guest")}}},k={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var M=a("VU/8")(C,k,!1,function(e){a("J37t")},null,null).exports,S=(a("poB8"),a("bNL2")),I=a.n(S),H=a("Tqaz");n.default.use(I.a),n.default.use(H.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:w,components:{App:M},template:"<App/>"})},oKP2:function(e,t){},tjiq:function(e,t,a){e.exports=a.p+"static/img/divergence_logo.842b3c9.png"},un5J:function(e,t,a){e.exports=a.p+"static/media/back.de8ec55.mp4"},"z+Yf":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.17638e779c0dddcd5947.js.map
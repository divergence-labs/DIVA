<template>
 <!-- Page Content -->
    <div class="container">
      <!-- Item Heading -->
      <h1 class="my-4">DIVA
        <small>Face Analysis Mode</small>
        
      </h1>
      <!-- Item Row -->
      <div class="row">
        <div class="col-md-8">
          <div class="video-container">
            <div> <video ref="video" id="video" width="750" height="700"  preload autoplay loop muted>  
                  </video>
                  <div class="overlay-desc">
                      <ul style="color:white;">
                        <li><span>Gender - </span><span id="ofagender"></span> </li>
                        <li><span>Age - </span><span id="ofaage"></span> </li>
                        <li><span>Glasses - </span><span id="ofaglasses"></span> </li>
                      </ul>
                    </div>
                </div>
             </div>
            <canvas ref="canvas" id="canvas" width="320" height="100"></canvas>
          </div>

          <div class="col-md-4">
            
                      
           <h3 style="text-align:center; color:white;">Just say "Scan" </h3>
            <div id="boxContainer" class="a" style="--n: 5;text-align:center">
    <div class="dot" style="--i: 0;"></div>
    <div class="dot" style="--i: 1;"></div>
    <div class="dot" style="--i: 2;"></div>
    <div class="dot" style="--i: 3;"></div>
    <div class="dot" style="--i: 4;"></div>
</div>
           
           <p style="color:lightyellow;margin:10px;">Emotions</p>
              <ul  style="color:green; list-style-type: none;">
                 <li>😄 
                    <div   class="progress" style="background:rgb(128,128,128,0.3); ">
                           <div id="ofasmile" class="progress-bar progress-bar-striped"> <span id="ofasmile_val"></span></div>
                           </div>
                         </li><br/>
                           <li><span>😠 </span>
                        <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofaanger" class="progress-bar progress-bar-striped"> <span id="ofaanger_val"></span></div>
                           </div>
                        </li><br/>
                        <li><span>😯 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofacontempt" class="progress-bar progress-bar-striped"> <span id="ofacontempt_val"></span></div>
                           </div>
                       </li><br/>
                        <li><span>😏 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofadisgust" class="progress-bar progress-bar-striped"> <span id="ofadisgust_val"></span></div>
                           </div>
                      </li><br/>
                        <li><span >😰</span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofafear" class="progress-bar progress-bar-striped"> <span id="ofafear_val"></span></div>
                           </div>
                        </li><br/>
                        <li><span>😊	 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofahappiness" class="progress-bar progress-bar-striped"> <span id="ofahappiness_val"></span></div>
                           </div>
                        </li><br/>
                        <li><span>😐 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofaneutral" class="progress-bar progress-bar-striped"> <span id="ofaneutral_val"></span></div>
                           </div>
                      </li><br/>
                        <li><span>😞 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofasadness" class="progress-bar progress-bar-striped"> <span id="ofasadness_val"></span></div>
                           </div>
                    </li><br/>
                        <li><span>😳 </span>
                         <div class="progress" style="background:rgb(128,128,128,0.3);">
                           <div id="ofasurprise" class="progress-bar progress-bar-striped"> <span id="ofasurprise_val"></span></div>
                           </div>
                       </li>
              </ul> 
          </div>
             <div class="row">
      <div class="col-md-4 mb-5">   

              <p style="color:lightyellow;margin:10px;">Makeup </p>
              <ul style="color:lightgreen;">
                <li><span>eyeMakeup - </span><span id="faeyeMakeup"></span> </li>
                <li><span>lipMakeup - </span><span id="falipMakeup"></span> </li>
              </ul>
   </div>
   <div class="col-md-4 mb-5">  
              <p style="color:lightyellow;margin:10px;">Head Pose Confident score</p>
              <ul style="color:lightgreen;">
                <li><span>pitch - </span><span id="fapitch"></span> </li>
                <li><span>roll - </span><span id="faroll"></span> </li>
                <li><span>yaw - </span><span id="fayaw"></span> </li>
              </ul>
   </div>
            
            <div class="col-md-4 mb-5">  
              <p style="color:lightyellow;margin:10px;">Facial Hair Confident score</p>
              <ul style="color:lightgreen;">
                <li><span>moustache - </span><span id="famoustache"></span> </li>
                <li><span>beard - </span><span id="fabeard"></span> </li>
                <li><span>sideburns - </span><span id="fasideburns"></span> </li>
              </ul>
            </div>
            <div class="col-md-4 mb-5">  
              <p style="color:lightyellow;margin:10px;">Face Attribute Levels </p>
              <ul style="color:lightgreen;">
                <li><span>blurLevel - </span><span id="fablurLevel"></span> </li>
                <li><span>exposureLevel - </span><span id="faexposureLevel"></span> </li>
                <li><span>noiseLevel - </span><span id="fanoiseLevel"></span> </li>
              </ul>
            </div>
            <div class="col-md-4 mb-5">  
              <p style="color:lightyellow;margin:10px;">Hair Confident score</p>
              <ul style="color:lightgreen;">
                <li><span>bald - </span><span id="fabald"></span> </li>
                <li><span>invisible - </span><span id="fainvisible"></span> </li>
              </ul>
            </div>
            <div class="col-md-4 mb-5">  
              <p style="color:lightyellow;margin:10px;">Occlusion</p>
              <ul style="color:lightgreen;">
                <li><span>foreheadOccluded - </span><span id="faforeheadOccluded"></span> </li>
                <li><span>eyeOccluded - </span><span id="faeyeOccluded"></span> </li>
                <li><span>mouthOccluded - </span><span id="famouthOccluded"></span> </li>
              </ul>
            </div>
             </div>
          </div>
        </div>
  
      <!-- /.row -->

    <!-- /.container -->
</template>
<script>
import $ from "jquery"
export default {
  name: 'Diagnostic',
   data() {
            return {
                video: {},
                canvas: {}
            }
        },
 
mounted: function mounted () { 
   const self = this
    this.video = this.$refs.video;

    navigator.mediaDevices.getUserMedia({video: true})
  .then(stream => this.video.srcObject = stream)
  .catch(e => console.error(e));
  }
  //   const self = this
  //   this.video = this.$refs.video;
  //   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //       navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //           this.video.src = window.URL.createObjectURL(stream);
  //           this.video.play();
  //       });
  //   }
  // },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/vendor/bootstrap/css/bootstrap.css" scoped>

</style>
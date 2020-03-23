<template>
 <div>
<header>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="../assets/videos/back.mp4" type="video/mp4">
  </video>
   <div  class="container">
    <div class="row">
      <!-- Sidebar Widgets Column -->
      <div style=" display: block;
         margin-left: auto;
         margin-right: auto;
         width: 50%;">      
        <img class="card-img-top" src="../assets/images/divergence_logo.png" alt="Card image cap">
        <br/><br/>
       </div>
    </div>
    <br/>
     <div style=" text-align: center;color:white;">
        <h1>Welcomes</h1>
      </div>
      <br/>
       <!-- <div class="row">
  
            <div class="col-6"  v-for="(guest,g) in guestImages" :key="g">
              <div class="card">
            <img class="card-img-top" :src="guest" alt="">
              </div>
          </div>
    </div>
     <br/><br/> -->
      <div style=" display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;">
        <div>
          <img :src="info" alt="">
        </div>
      </div>
    <!-- /.row -->
    </div>
    <!-- /.container -->
</header>



</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'GuestWelcome',
     data: function() {
    return  {
       info: null,
      // guestImages:[],
      // guest:""
     }
    },
     mounted: function() {  
        axios.get('https://diva-guest-experience.azurewebsites.net/visitors/detail/check/'+localStorage.getItem('visitorID')).then((response) => {
              this.info = response.data[0].guestOrganizationLogo
              //console.log(this.info);
              //console.log("sdsddfs"+ response.data[0].guestPhotos)
              // for(var i=0;i<response.data[0].guestPhotos.length; i++){
              // this.guestImages.push(response.data[0].guestPhotos[i])
              //  console.log(this.guestImages);
              // }
            })
            .catch((e) => {
              console.error(e)
            })
          }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/vendor/bootstrap/css/bootstrap.css" scoped>

</style>
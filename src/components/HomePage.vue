<template>
  <div class="home-page">
    <div class="img-container">
      <!--<img alt="Vue logo" src="../assets/mic-stand.jpg">-->
    </div>
    <div class="home-button-container">
      <router-link to="/events">
        <button class="home-page-button"><font-awesome-icon icon="arrow-right" /> &nbsp; GET TICKETS</button>
      </router-link>
      &nbsp;
      <button class="home-page-button"><font-awesome-icon icon="arrow-right" /> &nbsp; SHOP STORE</button>
    </div>
    <!-- <p>{{ msg }}</p> -->
    <div style="overflow: hidden">
      <div class="video-container">
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GAH-mSODLhg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3kMhFThKuus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/u3kQ3xJn4cU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NejdD3GKKeo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2WlN7iO-cfk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-qIE-AGuwDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.home-page {
  .video-container {
    padding-top: 20px;
    /*
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    */
    .iframe-container {
      margin: 4px 8px;
      display: inline-block;
    }
  }
  .img-container {
    width: 100%;
    height: 800px;
    overflow: hidden;
    background-image: url(https://i2.wp.com/misscm.com/wp-content/uploads/2015/03/lavelle-crawford-standup-e1425317003457.jpg?fit=940%2C529&ssl=1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;
    background-position-x: center;
    img {
      /* width: 100%; */
      max-height: 300px;
    }
  }
  .home-button-container {
    background-color: #000;
    padding: 40px 10px;

    .home-page-button {
      background-color: rgba(0,0,0,0);
      border-style: solid;
      border-color: #efca16;
      color: #efca16;
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
      opacity: 0.7;
      &:hover {
          opacity: 1;
          cursor: pointer;
      }
    }
  }
}


</style>

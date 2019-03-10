<template>
  <div class="loader-wrapper">
    
    <div class="loader-indicator">
    <span class="loader first_sm"></span>
    <span class="loader second_sm"></span>
    <span class="loader third_sm"></span>
    </div>
      
    <span class="indicator-text">{{ msg }}</span>
  </div>
</template>

<script>

import { store } from '../store.js';

export default {
  store,
  name: 'Spinner',
  props: {
    msg: String
  },
  mounted: () => {
    console.log("event mounted event component");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  background-color: rgba(0,0,0,0.9);
}

.loader-wrapper {
    display: block;
    position: relative;
    padding: 30px 10px 10px;
}

/*.loader-wrapper .loader-indicator{
  display: flex;
  align-items: center;
}
*/
.loader-wrapper .loader-indicator .loader {
    display: inline-block;
    height: 13px;
    width: 13px;
    background-color: #000;
    border-radius: 50%;
    margin: 0px 2px;
    -webkit-animation: bounce 1.5s infinite ease-in-out both;
    animation: bounce 1.5s infinite ease-in-out both;
}

.loader-wrapper .loader-indicator .first_sm {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

.loader-wrapper .loader-indicator .third_sm {
    -webkit-animation-delay: 0.16s;
     animation-delay: 0.16s;
}

.loader-wrapper .indicator-text {
  display: inline-block;
    font-family: monospace;
    color: #000;
    font-size: 14px;
    margin: 10px 0;
}


@-webkit-keyframes  bounce {
      0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes  bounce{
  0%, 80%, 100% {
   -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
      -webkit-transform: scale(1);
      transform: scale(1);
     }
   }
</style>

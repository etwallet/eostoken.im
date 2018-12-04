<template>
  <div class="footer_contain">
    <img class="down_arror" v-if="homeState !== 6" src="../../../assets/img/down_arror.png" alt="">
    <div class="img_contain">
      <span>
        <img src="../../../assets/img/Email.png" alt="">
      </span>
      <span>
        <img src="../../../assets/img/Facebook.png" alt="">
      </span>
      <span>
        <img src="../../../assets/img/Twitter.png" alt="">
      </span>
      <span class='WeChat'>
        <img @click='showQRCode' src="../../../assets/img/WeChat.png" alt="">
        <img v-show='code'  class='QR_Code' src="../../../assets/img/QR_Code.jpg" alt="">
      </span>
      <span>
        <img src="../../../assets/img/Weibo.png" alt="">
      </span>
    </div>
    <p>Copyright  ©  2018  EosToken, All rights reserved</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: false
    }
  },
  props: {
    homeState: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showQRCode () {
      this.code = !this.code
    }
  }

}
</script>

<style lang="scss" scoped>
  .footer_contain {
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 3%;
    left: 0;
    z-index:99;
    .down_arror{
      width: 5%;
      height: auto;
    }
    .img_contain {
      width: 100%;
      margin-top: .3rem;
      img {
        width: auto;
        height: 10px;
        // margin-left: 10%;
      }
    }
    p {
      font-size: 12px;
      color: #ccc;
      margin-top: 5%;
    }
    span {
      display: inline-block;
      margin-left: 10%;
      &:first-child {
        margin: 0;
      }
    }
    .WeChat{
      position:relative;
      margin-left:10%;
      .QR_Code{
        position:absolute;
        top:-227%;
        left:-100%;
        height:0.8rem;
        width:0.8rem;
      }
    }
  }
</style>

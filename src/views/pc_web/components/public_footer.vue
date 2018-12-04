<template>
  <div class="footer_contain">
    <span class="text">Copyright  ©  2018  EosToken, All rights reserved</span>
    <div class="img_contain">
      <img class="icon_link" src="../../../assets/img/Email.png" alt="">
      <img class="icon_link" src="../../../assets/img/Facebook.png" alt="">
      <img class="icon_link" src="../../../assets/img/Twitter.png" alt="">
      <span class="wechat">
        <img @mouseover="showState = true" @mouseout="showState = false" class="icon_link" src="../../../assets/img/WeChat.png" alt="">
        <img v-show="showState" class="qrcode" src="../../../assets/img/img_qrcode.jpg" alt="">
      </span>
      <img class="icon_link" src="../../../assets/img/Weibo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showState: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer_contain {
    z-index: 9999;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0% 3% 2% 3%;
    position: fixed;
    bottom: 0;
    left: 0;
    .wechat {
      position: relative;
      .qrcode {
        position: absolute;
        width: 2rem;
        left: -.6rem;
        bottom: .5rem;
      }
    }
    .text {
      color: #ccc;
    }
    .img_contain {
      height: 100%;
      img.icon_link {
        cursor: pointer;
        width: auto;
        height: 10px;
        margin-left: 25px;
      }
      img:hover {
        opacity: .5;
      }
    }
    .WeChat{
      position:relative;
      .QR_Code{
        position:absolute;
        top:-490%;
        left:-93%;
        height:80px;
        width:80px;
      }
      .QR_Code:hover{
        opacity: 1;
      }
    }
  }
</style>

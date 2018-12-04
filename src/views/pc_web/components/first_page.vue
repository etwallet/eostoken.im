<template>
  <swiper-slide>
    <div class="first_page">
      <p class="page_title">{{get_txt.txt_title}}</p>
      <img class="main_img" src="../../../assets/img/first_page_main.png" alt="">
      <div class="link_contain">
        <!--<a href="https://www.github.com/eostoken" class="open_address">{{get_txt.source_address}}</a>-->
        <a class="down_token">{{get_txt.down_address}}</a>
      </div>
      <div class="btn_contain">
        <span class="btn_img_contain">
          <a href="http://apple.eostoken.im/">
            <img class="btn_img" @mouseover="show_ios = hov_ios, show_down_ios = true" @mouseout="show_ios = nor_ios, show_down_ios = false" :src="show_ios" alt="">
          </a>
          <img v-show="show_down_ios" class="btn_down" src="../../../assets/img/download_apple.png" alt="">
        </span>
        <span class="btn_img_contain">
          <a href="http://android.eostoken.im/android">
            <img class="btn_img" @mouseover="show_and = hov_and, show_down_and = true" @mouseout="show_and = nor_and, show_down_and = false" :src="show_and" alt="">
          </a>
          <img v-show="show_down_and" class="btn_down" src="../../../assets/img/download_android.png" alt="">
        </span>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  data () {
    return {
      show_ios: require('../../../assets/img/ios_btn.png'),
      show_and: require('../../../assets/img/android_btn.png'),
      nor_ios: require('../../../assets/img/ios_btn.png'),
      hov_ios: require('../../../assets/img/hover_ios_btn.png'),
      nor_and: require('../../../assets/img/android_btn.png'),
      hov_and: require('../../../assets/img/hover_android_btn.png'),
      show_down_ios: false,
      show_down_and: false
    }
  },
  computed: {
    get_txt () {
      return this.$t('first_page')
    }
  }
}
</script>

<style lang="scss">
  .swiper-slide {
    .first_page {
      padding-top: 20vh;
      .page_title {
        font-size: 30px;
      }
      .main_img{
        margin-top: 2vh;
        width: 40%;
        height: auto;
      }
      .link_contain {
        font-size: 12px;
        margin-top: 3vh;
        a.open_address {
          background-image:-webkit-linear-gradient(left,#3A7FF3,#3A7FF3,#353CE0);
          text-decoration: underline!important;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          border-bottom: 1px solid #3A7FF3;
          margin-right: 2vw;
          cursor: pointer;
        }
        a.down_token {
          color: #000;
          cursor: pointer;
        }
        a:hover {
          opacity: .5;
        }
      }
      .btn_contain {
        margin-top: 3vh;
        .btn_img_contain {
          position: relative;
          a {
            display: inline-block;
          }
          .btn_down {
            position: absolute;
            top: -2rem;
            left: 50%;
            margin-left: -50px;
            width: 100px;
            height: 100px;
          }
        }
        img.btn_img {
          cursor: pointer;
          width: 3rem;
          height: 1.3rem;
          margin-left: 1vw;
          &:first-child {
            margin: 0;
          }
        }
      }
    }
  }
</style>

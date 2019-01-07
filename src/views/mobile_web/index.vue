<template>
  <div class="main_contain">
    <public-header v-on:change="changeSlide" v-on:showState="changeIndex"></public-header>
    <swiper ref="myswiper" :options="swiperOption">
      <!-- <first-page></first-page> -->

        <swiper-slide>
    <p class="page_title">{{get_txt.txt_title}}</p>
    <img class="img_main" src="../../assets/img/first_page_main.png" alt="">
    <div class="link_contain">
      <!--<a href="https://www.github.com/eostoken">{{get_txt.source_address}}</a> href="" -->
      <span>{{get_txt.down_address}}</span>
    </div>
    <div class="btn_contain">
      <a @click="iphone">
        <img src="../../assets/img/ios_btn.png" alt="">
      </a>
      <a  @click="android">
        <img src="../../assets/img/android_btn.png" alt="">
      </a>
    </div>
          <div style="color: #f00">如果苹果手机不能下载，请把苹果手机系统升级到最新版本</div>
  </swiper-slide>
      <!--<SecondPage></SecondPage>-->
      <ThreePage></ThreePage>
      <four-page></four-page>
      <FivePage></FivePage>
      <SixPage></SixPage>
      <SevenPage></SevenPage>
    </swiper>
    <public-footer :homeState=homeState></public-footer>
    <div class="app_down_div_tip" v-show="isWeChat"  @click="cancel">
      <br>
      <p class="p">
        <img src="../../assets/img/to_browser.png" >
      </p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p class="p1">ETWallet</p>
      <p class="p2">请点击右上角在<span>浏览器</span>打开该页面</p>
    </div>
  </div>
</template>

<script>
import PublicHeader from './components/public_header.vue'
import FirstPage from './components/first_page'
import SecondPage from './components/second_page'
import ThreePage from './components/three_page'
import FourPage from './components/four_page'
import FivePage from './components/five_page'
import SixPage from './components/six_page'
import SevenPage from './components/seven_page'
import PublicFooter from './components/public_footer'
export default {
  components: {
    PublicHeader,
    FirstPage,
    SecondPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage,
    SevenPage,
    PublicFooter
  },
  data () {
    let that = this
    return {
      isWeChat: false,
      homeState: 0,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        on: {
          init: function () {
            this.realIndex === 0 && (that.homeState = 0)
          },
          slideChange: function () {
            that.homeState = this.realIndex
            console.log(that.homeState)
          }
        }
      }
    }
  },
  created: function() {

  },
  computed: {
      get_txt() {
          return this.$t('first_page')
      },
    swiper () {
      return this.$refs.myswiper.swiper
    }
  },
  methods: {
      cancel(){
       this.isWeChat = false;
    },
    iphone(){
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          this.isWeChat = true;
        }else{
           window.location.href = "itms-services://?action=download-manifest&url=https://apple.g2qzo.cn/images/eostoken20181120.plist"
        }

    },
    android(){
      var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          this.isWeChat = true;
        }else{
           window.location.href = "http://android.eostoken.im/android"
        }

    },
    changeSlide (index) {
      this.swiper.slideTo(index)
    },
    changeIndex (state) {
      console.log(state)
      if (state) {
        document.getElementsByClassName('swiper-container')[0].style.zIndex = -1
      } else {
        document.getElementsByClassName('swiper-container')[0].style.zIndex = 9999
      }
    },
     get_txt () {
      return this.$t('first_page')
    }
  }
}
</script>

<style lang="scss" type="text/css">
.main_contain {
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  .swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    // background-color: #eee;
    .swiper-slide{
      width: 100%;
      height: 100%;
    }
  }
  .swiper-container-vertical > .swiper-wrapper {
    height: 100%;
  }
  .main_contain .swiper-container {
    -webkit-tap-highlight-color:transparent;
  }
  .swiper-container {
      // z-index: -1;
    &.showNav {
      z-index: -1;
    }
  }
}
    .app_down_div_tip{
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 999;
        background-color: #1d2a3b;
        width: 100%;
        height: 100em;
        opacity:0.8;
        background:#000;
        .p{
            position:relative;
            width: 100%;
            img{
                position: absolute;
                width:3em;
                height:2.8em;
              right: 1.5em;}
           }

            .p1{
                text-align: center;
                color: white;
            }
            .p2{
                text-align: center;
                color: white;
                margin-top: 0em;
                span{
                    color: #ffd700;
                }
            }
    }

  .swiper-slide {
    // padding-top: 1.5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .page_title {
      padding-top: .12rem;
      font-size: .4rem;
    }
    .img_main{
      width: 100%;
      height: auto;
      margin-top: .5rem;
    }
    .link_contain{
      margin-top: .7rem;
      a {
        font-size: 12px;
        color: #3A7FF3;
        margin-right: .5rem;
      }
      span {
        font-size: 12px;
      }
    }
    .btn_contain{
      width: 100%;
      margin-top: .7rem;
      img {
        width: 3rem;
        height: auto;
      }
    }
  }
</style>

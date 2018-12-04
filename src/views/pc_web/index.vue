<template>
  <div class="contain">
    <PublicHeader :homeState=homeState v-on:change="changeSlide"></PublicHeader>
    <swiper ref="myswiper" :options="swiperOption">
      <FirstPage></FirstPage>
      <!--<TwoPage></TwoPage>-->
      <ThreePage></ThreePage>
      <FourPage></FourPage>
      <FivePage></FivePage>
      <SixPage></SixPage>
      <SevenPage></SevenPage>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <img class="mouse_tip" src="../../assets/img/img_mouse.png" alt="">
    <PublicFooter></PublicFooter>
  </div>
</template>

<script>
import PublicHeader from './components/public_header.vue'
import PublicFooter from './components/public_footer.vue'
import FirstPage from './components/first_page.vue'
//import TwoPage from './components/two_page.vue'
import ThreePage from './components/three_page.vue'
import FourPage from './components/four_page.vue'
import FivePage from './components/five_page.vue'
import SixPage from './components/six_page.vue'
import SevenPage from './components/seven_page.vue'
export default {
  components: {
    PublicHeader,
    PublicFooter,
    FirstPage,
//    TwoPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage,
    SevenPage
  },
  data () {
    let that = this
    return {
      homeState: 0,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function () {
            this.realIndex === 0 && (that.homeState = 0)
          },
          slideChange: function () {
            that.homeState = this.realIndex
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.myswiper.swiper
    }
  },
  methods: {
    changeSlide (index) {
      console.log(index)
      this.swiper.slideTo(index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .contain {
    width: 100%;
    height: 100%;
    padding: 0 3% 0 3%;
    overflow: hidden;
    position: relative;
  }
  .swiper-container,
  .swiper-container-vertical > .swiper-wrapper {
    height: 100%;
  }
  .mouse_tip {
    z-index: 9999;
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    width: 2vw;
  }
</style>

<template>
  <swiper-slide>
    <div class="six_page">
      <div class="txt_contain">
        <div class="txt_area">
          <p class="main_txt">{{get_txt.title_one}}</p>
          <p class="tip_txt">{{get_txt.txt_one}}</p>
        </div>
        <div class="txt_area">
          <p class="main_txt">{{get_txt.title_two}}</p>
          <p class="tip_txt">{{get_txt.txt_two}}</p>
        </div>
        <div class="txt_area">
          <p class="main_txt">{{get_txt.title_three}}</p>
          <p class="tip_txt">{{get_txt.txt_three_one}}</p>
          <p class="tip_txt">{{get_txt.txt_three_two}}</p>
        </div>
      </div>
      <div class="img_cointain">
        <img src="../../../assets/img/img_earth.png" alt="">
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  computed: {
    get_txt () {
      return this.$t('six_page')
    }
  }
}
</script>

<style lang="scss">
  .swiper-slide {
    .six_page {
      width: 100%;
      height: 100%;
      padding: 0 0 0 15vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .txt_contain{
        padding-left: 3%;
        width: 50%;
        text-align: left;
        p {
          font-size: 16px;
        }
        .txt_area {
          margin-top: 5vh;
          &:first-child {
            margin: 0;
          }
        }
        .main_txt {
          margin-bottom: 8%;
          font-size: 36px;
        }
        .tip_txt1 {
          margin-top: 1.5vh;
        }
        .tip_txt {
          font-size: 16px;
          margin-top: 1vh;
        }
      }
      .img_cointain {
        width: 60%;
        text-align: right;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>

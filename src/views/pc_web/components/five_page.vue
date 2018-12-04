<template>
  <swiper-slide>
    <div class="five_page">
      <div class="txt_contain">
        <p class="main_txt">{{get_txt.txt_title}}</p>
        <p class="tip_txt">{{get_txt.source_address}}</p>
        <p class="tip_txt1">{{get_txt.down_address}}</p>
      </div>
      <div class="img_cointain">
        <img src="../../../assets/img/main_four.png" alt="">
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  computed: {
    get_txt () {
      return this.$t('five_page')
    }
  }
}
</script>

<style lang="scss">
  .swiper-slide {
    .five_page {
      width: 100%;
      height: 100%;
      padding: 0 14vw 0 15vw;
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
        .main_txt {
          margin-bottom: 8%;
          font-size: 36px;
        }
        .tip_txt1 {
          margin-top: 1.5vh;
        }
      }
      .img_cointain {
        width: 50%;
        text-align: right;
        img {
          width: 40%;
          height: auto;
        }
      }
    }
  }
</style>

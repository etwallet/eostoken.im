<template>
  <swiper-slide>
    <img class="img_earth" src="../../../assets/img/img_earth.png" alt="">
    <div class="txt_contain">
      <p class="title">{{get_txt.title_one}}</p>
      <p class="detail">{{get_txt.txt_one}}</p>
    </div>
    <div class="txt_contain">
      <p class="title">{{get_txt.title_two}}</p>
      <p class="detail">{{get_txt.txt_two}}</p>
    </div>
    <div class="txt_contain">
      <p class="title">{{get_txt.title_three}}</p>
      <p class="detail">{{get_txt.txt_three_one}}</p>
      <p class="detail">{{get_txt.txt_three_two}}</p>
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

<style lang="scss" scoped>
  .swiper-slide {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img_earth {
      // padding-top: 1.3rem;
      width: 3.5rem;
      margin-top: -2rem;
    }
    .txt_contain{
      margin-top: 0.2rem;
      &:first-child {
        margin: 0;
      }
      .title {
        font-size: .4rem;
      }
      .detail {
        margin-top: .1rem;
        font-size: 12px;
      }
    }
  }
</style>

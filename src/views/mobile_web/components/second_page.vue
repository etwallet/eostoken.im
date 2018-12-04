<template>
  <swiper-slide>
    <p class="top_txt">{{get_txt.txt_title}}</p>
    <div class="body">
      <p class="sm_txt">{{get_txt.source_address}}</p>
    </div>
    <img class="img_main" src="../../../assets/img/right_main.png" alt="">
  </swiper-slide>
</template>

<script>
export default {
  computed: {
    get_txt () {
      return this.$t('two_page')
    }
  }
}
</script>

<style lang='scss' scoped>
  .swiper-slide {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top_txt {
      margin-top: -1rem;
      font-size: .4rem;
    }
    .sm_txt {
      font-size: 12px;
      margin-top: .3rem;
    }
    .img_main {
      margin-top: .2rem;
      width: 3rem;
      height: auto;
    }
    .body {
      font-size: 12px;
      height: 10%;
    }
  }
</style>

<template>
  <div class="header_contain">
    <img class="logo_contain" src="../../../assets/img/logo.png" alt="">
    <img class="menu_contain" @click="showNav" src="../../../assets/img/icon_menu.png" alt="">
    <div class="nav_contain" v-show="navState">
      <ul>
        <li @click="changeSlide(0)">{{get_txt.home}}</li>
        <li @click="changeSlide(1)">{{get_txt.highlight}}</li>
        <li @click="changeSlide(5)">{{get_txt.about_us}}</li>
        <li @click="changeSlide(6)">{{get_txt.Lingks}}</li>
        <li>
          <span @click="select_lang('zh')">{{get_txt.zh}}</span>
          <span class="line"></span>
          <span @click="select_lang('en')">{{get_txt.en}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setCookie } from '@/utils/cookies.js'
export default {
  data () {
    return {
      navState: false
    }
  },
  computed: {
    get_txt () {
      return this.$t('header')
    }
  },
  watch: {
    navState (newVal) {
      this.$emit('showState', newVal)
    }
  },
  methods: {
    showNav () {
      this.navState = !this.navState
    },
    changeSlide (index) {
      this.$emit('change', index)
      this.navState = false
    },
    select_lang (lang) {
      setCookie('lang', lang, 365)
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.header_contain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  .logo_contain {
    width: 1.5rem;
    height: 1.5rem;
  }
  .menu_contain {
    width: 8%;
    height: 30%;
    margin-top: 3%;
    margin-right: 3%;
  }
  .nav_contain {
    position: fixed;
    top: 8%;
    left: 0;
    width: 100%;
    height: 30vh;
    z-index: 10000;
    background-color: rgba(0, 0, 0, .8);
    ul {
      height: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 20%;
        line-height: 20%;
        span.line {
          height: 30%;
          margin: 0 10px;
          width: 2px;
          background-color: #ececec;
        }
      }
    }
  }
}
</style>
<style>
  .nav_contain {
    z-index: 10000;
  }
</style>

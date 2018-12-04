import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './utils/flexible.js'
import 'swiper/dist/css/swiper.css'
import VueI18n from 'vue-i18n'
import {
  setCookie,
  getCookie
} from './utils/cookies'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)

Vue.config.productionTip = false

let lang = ''
let messages = ''
let language = ''
if (getCookie('lang') == null) {
  if (navigator.appName === 'Netscape') {
    language = navigator.language
  } else {
    language = navigator.browserLanguage
  }
  if (language.indexOf('en') > -1) {
    setCookie('lang', 'en', 365)
  } else if (language.indexOf('zh') > -1) {
    setCookie('lang', 'zh', 365)
  } else {
    setCookie('lang', 'zh', 365)
  }
  lang = getCookie('lang')
} else {
  lang = getCookie('lang')
}

switch (lang) {
  case 'zh':
    messages = require('@/assets/language/zh.json')
    break
  case 'en':
    messages = require('@/assets/language/en.json')
    break
}

const i18n = new VueI18n({
  locale: lang,
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

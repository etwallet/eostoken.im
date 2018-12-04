<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    var that = this
    let clientWidth = document.documentElement.offsetWidth || document.body.offsetWidth
    if (clientWidth < 980) {
      that.$router.push('/')
    } else if (clientWidth > 980) {
      that.$router.push('/pc')
    }
    window.addEventListener('resize', function () {
      clientWidth = document.documentElement.offsetWidth || document.body.offsetWidth
      if (clientWidth < 980) {
        that.$router.push('/')
      } else if (clientWidth > 980) {
        that.$router.push('/pc')
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

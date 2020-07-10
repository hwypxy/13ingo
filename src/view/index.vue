<template>
  <div class="container" ref="container">
    <Header class="header" />
    <router-view class="router"></router-view>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";

export default {
  name: "V",
  components: {
    Header,
    Footer
  },
  beforeCreate: {}
};
</script>

<style lang="stylus" scoped>
.container
  height 1500px
  position relative
  background url('./img/bgimg.jpg') no-repeat 0 0 / 100%
  color #fff
  .header
    width 100%
    height 60px
    position sticky
    left 0
    top 0
</style>
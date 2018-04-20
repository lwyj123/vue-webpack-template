<template>
  <div class="app-wrapper">
    <p>keke</p>
  </div>
</template>

<script>

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain
  },
  computed: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 750px;
  .navbar-wrapper {
    z-index: 100;
    background-color: #f32941;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-container {
    background-color: #f8f9fa;
    height: calc(100vh - #{$nav-height});
    overflow: auto;
    transition: all 0.28s ease-out;
  }
}
</style>

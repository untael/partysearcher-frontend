<template>
  <div class="layout__body">
    <div class="layout__body__content">
      <div class="layout__navbar">
        <vm-navbar/>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import VmNavbar from './Navbar.vue'
  import VmUserProfileDisplay from '../User/UserProfileDisplay.vue'

  export default {
    components: {
      VmUserProfileDisplay,
      VmNavbar,
    },
    name: 'VmLayout',
  }
</script>

<style lang="scss">
  @font-face {
    font-family: lfg2;
    src: url(../../Fonts/lfg2.ttf);
  }

  .layout {
    &__body {
      display: flex;
      width: 100%;
      background-color: #424242;

      &__content {
        min-height: 1000px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        font-family: lfg2;
      }
    }
    &__navbar {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
    }
  }
</style>
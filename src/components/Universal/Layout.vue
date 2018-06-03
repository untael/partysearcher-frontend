<template>
    <div class="layout-body">
        <div class="layout-navbar">
            <vm-navbar>
            </vm-navbar>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

  import VmNavbar from './Navbar.vue'

  export default {
    components: { VmNavbar },
    name: 'VmLayout',
  }
</script>

<style>
    @font-face {
        font-family: lfg2;
        src: url(../../Fonts/lfg2.ttf);
    }

    .layout-body {
        background-color: #242d44;
        height: 5000px;
        max-width: 960px;
        margin: 0 auto;
        overflow: hidden;
        font-family: lfg2;

    }
    .layout-navbar{
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        background: #404b62;
        margin-bottom: 8px;
        height: 34px;
    }
</style>
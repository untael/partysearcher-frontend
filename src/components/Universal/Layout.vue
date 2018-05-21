<template>
    <div class="body">
        <router-view></router-view>
    </div>
</template>

<script>

  export default {
    name: 'VmLayout',
  }
</script>

<style>
    .body {
        background-color: #405275;
        height: 5000px;
        width: 100%;
        overflow: hidden;
    }
</style>
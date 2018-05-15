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
        background-color: lightskyblue;
        min-height: 700px;
        max-width: 100%;
        overflow: hidden;
        margin-left:10%;
        margin-right:10%;
    }
</style>
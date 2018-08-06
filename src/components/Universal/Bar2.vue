<template>
  <div class="bar2 transition">
    <div class="bar2__content">
      <slot/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'VmBar2',
  }
</script>

<style lang="scss">
  .bar2 {
    background: black;
    border-bottom: 2px solid transparent;
    &__content {
      color: white;
      margin: 5px 5px;
      font-size: 16pt;
      text-align: center;
    }
  }

  .bar2:hover {
    transition: background,border-bottom 0.3s;
    border-bottom: 2px solid white;
    &__content:hover {
      color: black;
    }
  }
</style>
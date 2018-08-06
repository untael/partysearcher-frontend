<template>
  <div class="bar transition">
    <div class="bar__content">
      <slot/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'VmBar',
    props: {
      isActive: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss">
  .bar {
    border: 2px solid transparent;
    border-radius: 2px;
    overflow: hidden;
    background: #212121;

    &__content {
      margin: 5px auto;
      text-align: center;
      color: white;
      font-size: 18pt;
    }
  }

  .bar:hover {
    border-color: white;
    cursor: pointer;
    background: #424242;
  }

  .transition {
    transition: 0.3s;
  }

  .bar-content {

  }
</style>
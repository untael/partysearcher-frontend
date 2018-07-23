<template>
        <div class="bar transition">
            <div class="bar-content">
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
    .bar{
        border: 2px solid transparent;
        /*border-radius: 10px;*/
        overflow: hidden;
        background: #242d44;
    }

    .bar:hover {
        border-color: #00aeee;
        cursor: pointer;
    }

    .transition {
        transition: 0.3s;
    }

    .bar-content {
        margin: 5px 5px;
        text-align: center;
        color: white;
        font-size: 18pt;
    }
</style>
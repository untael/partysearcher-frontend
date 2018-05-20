<template>
    <div class="bar-border">
        <div class="bar transition">
            <div class="bar__content">
                <slot/>
            </div>
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
    .bar-border{
        border: 2px solid white
    }
    .bar {
        border: 1px solid transparent;
        border-radius: 2px;
        overflow: hidden;
    }

    .bar:hover {
        border: 1px solid white;
    }

    .transition {
        transition: 0.4s;
    }

    .bar__content {
        margin: 15px 20px;
        text-align: center;
        color: white;
        font-size: 14pt;
    }
</style>
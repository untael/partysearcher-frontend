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
    .bar{
        border: 1px solid transparent;
        border-radius: 2px;
        overflow: hidden;
        background: #242d44;
    }

    .bar:hover {
        border: 1px solid white;
    }

    .transition {
        transition: 0.4s;
    }

    .bar__content {
        margin: 5px 5px;
        text-align: center;
        color: white;
        font-size: 18pt;
    }
</style>
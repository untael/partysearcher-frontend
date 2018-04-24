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
        border: 2px solid #218FFE;
        border-radius: 2px;
        background-color: #218FFE;
        overflow: hidden;
    }
    .bar:hover{
        border: 2px solid white;
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
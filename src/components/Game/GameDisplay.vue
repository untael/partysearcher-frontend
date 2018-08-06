<template>
  <div class="display__body">
    <div class="display__container">
      <div class="display__header-name">
        Name:
      </div>
      <div class="display__name">
        {{game.name}}
      </div>
      <div class="display__header-description">
        Description
      </div>
      <div class="display__description">
        {{game.description}}
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>

  import Game from './Game'

  export default {
    name: 'VmGameDisplay',
    props: {
      game: {
        type: Game,
      },
    },
  }

</script>

<style lang="scss">
  .display {
    &__body {
      min-width: 400px;
    }
    &__container {
      border-radius: 2px;
      margin: 10px 10px;
      background: black;
    }
    &__header-name {
      border: 4px solid black;
      background: #212121;
      font-size: 14pt;
      color: white;
      margin: 10px auto;
    }
    &__name {
      margin: 10px auto;
      color: white;
      width: 95%;
      height: 100%;
    }
    &__header-description {
      border: 4px solid black;
      margin: auto;
      background: #212121;
      font-size: 14pt;
      color: white;
    }
    &__description {
      margin: 10px auto;
      color: white;
      height: 100%;
      min-height: 200px;
      width: 95%;
    }

  }

</style>
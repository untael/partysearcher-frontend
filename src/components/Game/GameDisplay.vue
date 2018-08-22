<template>
  <div class="game-display__body">
    <div class="game-display__container">
      <div class="game-display__text__header">
        Game Info
      </div>
      <div class="game-display__header-name">
        Name:
      </div>
      <div class="game-display__name">
        {{game.name}}
      </div>
      <div class="game-display__header-description">
        Description
      </div>
      <div class="game-display__description">
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
  .game-display {
    &__body {
      min-width: 400px;
    }
    &__container {
      border-radius: 2px;
      margin: 0px 10px;
      background: black;
    }
    &__header-name {
      border: 4px solid black;
      border-radius: 4px;
      background: #212121;
      font-size: 14pt;
      color: white;
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
    &__text {
      color: white;
      margin: 10px auto;
      &__header {
        font-size: 18pt;
        text-align: center;
        color: white;
        background: #212121;
        border: 4px solid black;
      }
    }

  }

</style>
<template>
  <div class="game-room-display__body">
    <div class="game-room-display__container">
      <div class="game-room-display__text__header">
        About this room
      </div>
      <div class="game-room-display__header-name">
        Username:
      </div>
      <div class="game-room-display__name">
        {{gameRoom.username}}
      </div>
      <div class="game-room-display__header-game">
        Game:
      </div>
      <div class="game-room-display__name">
        {{gameRoom.game}}
      </div>
      <div class="game-room-display__header-description">
        Room description
      </div>
      <div class="game-room-display__description">
        {{gameRoom.description}}
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>

  import GameRoom from './GameRoom'

  export default {
    name: 'VmGameRoomDisplay',
    props: {
      gameRoom: {
        type: GameRoom,
      },
    },
  }

</script>

<style lang="scss">
  .game-room-display {
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
    &__header-game {
      border: 4px solid black;
      margin: auto;
      background: #212121;
      font-size: 14pt;
      color: white;
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
<template>
  <div class="game-room-list-item__body">
    <div class="game-room-list-item__container">
      <vm-bar
        @click.native="$emit('selected', gameRoom)"
      >
        {{gameRoom.username}}
        <div class="game-room-list-item__game-name">
          {{gameRoom.game}}
        </div>
      </vm-bar>
    </div>
  </div>
</template>

<script>
  import VmBar from '../Universal/Bar'
  import GameRoom from './GameRoom'

  export default {
    name: 'VmGameRoomListItem',
    components: {
      VmBar,
    },
    data () {
      return {
        mode: 'one',
      }
    },
    props: {
      gameRoom: {
        type: GameRoom,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  .game-room-list-item {
    &__body {
      display: flex;
      min-width: 300px;
    }
    &__container {
      margin: 10px auto;
      width: 300px;
    }
    &__game-name {
      font-size: 9pt;

    }
  }

  .game-list-item-block {
    width: 90%;
    margin: 10px auto;
  }

  .gamelistitem-update-button {
    width: 100%;
    margin: auto;
    color: white;
    background: #242d44;
    border: 1px solid white;
    border-radius: 4px;
    font-family: two;
    font-size: 16pt;
  }

  .game-room-list-item-game {
    font-size: 9pt;
  }
</style>

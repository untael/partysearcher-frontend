<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1000px; background-color: #405275">
                <vm-game-room-display :gameRoom="gameRoom"/>
            </div>
        </div>
    </div>
</template>

<script>

  import VmGameRoomDisplay from './GameRoomDisplay.vue'
  import GameRoomFactory from './GameRoomFactory'

  export default {
    components: {
      VmGameRoomDisplay,
    },
    data () {
      return {
        gameRoom: GameRoomFactory.getDefaultGameRoom(),
      }
    },
  }
</script>
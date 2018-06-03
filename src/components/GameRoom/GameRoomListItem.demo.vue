<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1200px; background-color: #405275">
                <vm-game-room-list-item :gameRoom="gameRoom"/>
            </div>
        </div>
    </div>
</template>

<script>

  import VmGameRoomListItem from './GameRoomListItem'
  import GameRoomFactory from './GameRoomFactory'

  export default {
    components: {
      VmGameRoomListItem,
    },
    data () {
      return {
        gameRoom: GameRoomFactory.getDefaultGame(),
      }
    },
  }
</script>
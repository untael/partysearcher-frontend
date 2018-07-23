<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="height: 5000px; width: 1200px;background-color: #405275">
                <vm-game-room-list-explorer
                        :gameRoom="gameRoom"/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmGameRoomListExplorer from './GameRoomListExplorer'
  import GameRoomFactory from './GameRoomFactory'

  export default {
    components: {
      VmGameRoomListExplorer,
    },
    data () {
      return {
        gameRoom: GameRoomFactory.getDefaultGameRoom(),
      }
    },
  }
</script>
<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 800px; background-color: #405275;">
                <vm-game-room-list
                        :game="game"
                        @selected="selected"
                >
                </vm-game-room-list>
            </div>
        </div>
    </div>
</template>

<script>

  import VmGameRoomList from './GameRoomList'
  import GameRoomFactory from './GameRoomFactory'

  export default {
    components: {
      VmGameRoomList,
    },
    data () {
      return {
        game: GameRoomFactory.getDefaultGameRoom(),
      }
    },
    //need to see outcoming game on click
    methods: {
      selected (game) {
        console.log('games= ', game)
      },
    },
  }
</script>
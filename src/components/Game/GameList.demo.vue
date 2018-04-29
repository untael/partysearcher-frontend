<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 400px; background-color: #405275;">
                <vm-game-list
                        :game="game"
                        @selected="selected"
                >
                </vm-game-list>
            </div>
        </div>
    </div>
</template>

<script>

    import VmGameList from './GameList'
    import GameFactory from './GameFactory'

  export default {
    components: {
      VmGameList,
    },
    data () {
      return {
        game: GameFactory.getDefaultGame(),
      }
    },
    //need to see outcoming game on click
//    methods: {
//      selected (game) {
//        console.log('games= ', game)
//      },
//    },
  }
</script>
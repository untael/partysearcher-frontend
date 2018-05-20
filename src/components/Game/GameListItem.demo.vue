<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1200px; background-color: #405275">
                <vm-game-list-item :game="game"/>
            </div>
        </div>
    </div>
</template>

<script>

  import VmGameListItem from './GameListItem'
  import GameFactory from './GameFactory'

  export default {
    components: {
      VmGameListItem,
    },
    data () {
      return {
        game: GameFactory.getDefaultGame(),
      }
    },
  }
</script>
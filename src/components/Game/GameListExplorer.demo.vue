<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 400px;background-color: #405275">
                <vm-game-list-explorer
                        :game="game"/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmGameListExplorer from './GameListExplorer'
  import GameFactory from './GameFactory'

  export default {
    components: {
      VmGameListExplorer,
    },
    data () {
      return {
        game: GameFactory.getDefaultGame(),
      }
    },
  }
</script>
<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1000px; background-color: #405275">
                <vm-game-display :game="game"/>
            </div>
        </div>
    </div>
</template>

<script>

  import VmGameDisplay from './GameDisplay.vue'
  import GameFactory from './GameFactory'

  export default {
    components: {
      VmGameDisplay,
    },
    data () {
      return {
        game: GameFactory.getDefaultGame(),
      }
    },
  }
</script>
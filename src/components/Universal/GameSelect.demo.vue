<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1200px; background-color: #405275">
                <vm-game-select :game="game"/>
            </div>
        </div>
    </div>
</template>

<script>

  import GameFactory from '../Game/GameFactory'
  import VmGameSelect from './GameSelect.vue'

  export default {
    components: {
      VmGameSelect,
    },
    data () {
      return {
        game: GameFactory.getDefaultGame(),
      }
    },
  }
</script>
<template>
    <div class="block">
        <vm-bar>
            {{game.name}}
        </vm-bar>

    </div>
</template>

<script>
  import VmBar from '../Universal/Bar'
  import VmGameDisplay from '../Game/GameDisplay.vue'
  import Game from './Game'

  export default {
    name: 'VmGameListItem',
    components: {
      VmGameDisplay,
      VmBar,
    },
    data () {
      return {
        mode: 'one',
      }
    },
    props: {
      game: {
        type: Game,
        required: true,
      },
    },

  }
</script>

<style>
    .block {
        margin-bottom: 5px;
    }
</style>

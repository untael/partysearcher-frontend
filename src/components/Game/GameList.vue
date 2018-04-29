<template>
    <div>
<vm-game-list-item
                :game="game"
                v-for="game in games"
                :key="game.id"
                :name="game.name"
                @click.native="$emit('selected', game)"
        >
        </vm-game-list-item>
    </div>
</template>

<script>
  import VmGameListItem from './GameListItem.vue'
  import VmGameDisplay from '../Game/GameDisplay.vue'
  import Game from './Game'
  import GameFactory from './GameFactory'

  export default {
    name: 'VmGameList',
    components: {
      VmGameDisplay,
      VmGameListItem,
    },
    data () {
      return {
        games: [
          GameFactory.getDefaultGame(),
          GameFactory.getDefaultGame(),
          GameFactory.getDefaultGame(),
        ],
      }
    },
  }
</script>
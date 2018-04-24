<template>
    <div>
        <div v-if="mode === 'one'">
            <vm-game-list
                    @click.native="mode='two'">
            </vm-game-list>
        </div>
        <div v-else>
            <div style="position:relative;">
                <vm-game-list>
                </vm-game-list>
                <vm-game-display
                        :game="game">
                    <div style="position:absolute; right: 0; bottom: 0;">
                        <button
                                @click="mode='one'"
                        >Close
                        </button>
                    </div>
                </vm-game-display>
            </div>
        </div>
    </div>
</template>

<script>
  import VmGameDisplay from './GameDisplay'
  import VmGameList from './GameList'
  import Game from './Game'

  export default {
    name: 'VmGameListExplorer',
    components: {
      VmGameDisplay,
      VmGameList,
    },
    data () {
      return {
        mode: 'one',
      }
    },
    props: {
      game: {
        type: Game,
      },
    },
  }
</script>
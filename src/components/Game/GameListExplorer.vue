<template>
    <div>
        <div v-show="mode === 'one'">
            <vm-game-list
                    @click.native="mode='two'"
                    @selected="selected"
            />
        </div>
        <div v-show="mode === 'two'">
            <div style="position:relative;">
                <vm-game-display :game="selectedGame"/>
                <div style="position:absolute; right: 0; bottom: 0;">
                    <button
                            @click="mode='one'"
                    >Close
                    </button>
                </div>
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
        selectedGame: null,
      }
    },
    methods: {
      selected (game) {
        this.selectedGame = game
      },
    },
  }
</script>
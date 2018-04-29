<template>
    <div class="content">
        <div class="item" v-show="mode === 'one'">
            <vm-game-list
                    @click.native="mode='two'"
                    @selected="selected"
            />
        </div>
        <div v-show="mode === 'two'">
            <div class="display">
                <vm-game-display
                        :game="selectedGame"
                />
                <button style="position: absolute; top:0; right:0;"
                        @click="mode='one'"
                >X
                </button>
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
        console.log(game)
      },
    },
  }
</script>

<style>
    .content {
        position: relative;
    }

    .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
    }

    .display {
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
    }
</style>
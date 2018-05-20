<template>
    <div class="content">
        <div class="item" v-show="mode === 'one'">
            <div style="width: 60%; margin-left: 20%; margin-top: 5px; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <vm-game-list
                    @selected="selected"
                    @click.native="mode='two'"
            />
        </div>
        <div v-show="mode === 'two'">
            <div class="display">
                <vm-game-display
                        :game="selectedGame"
                />
                <div style="width: 60%; margin-left: 20%; margin-top: 5px; ">
                    <vm-bar
                            @click.native="mode='one'"
                    >
                        Back to the list
                    </vm-bar>
                </div>
            </div>
        </div>
        <div v-show="mode === 'three'">
            <vm-game-create-form/>
            <div style="width: 60%; margin-left: 20%; margin-top: 5px; ">
                <vm-bar
                        @click.native="mode='one'"
                >
                    Back to the list
                </vm-bar>
            </div>
        </div>
    </div>
    <!--<button-->
    <!--@click="getGames"-->
    <!--&gt;-->
    <!--GetGames-->
    <!--</button>-->
    </div>
</template>

<script>
  import VmGameDisplay from './GameDisplay'
  import VmGameList from './GameList'
  import VmBar from '../Universal/Bar'
  import VmGameCreateForm from './GameCreateForm.vue'

  export default {
    name: 'VmGameListExplorer',
    components: {
      VmGameCreateForm,
      VmGameDisplay,
      VmGameList,
      VmBar,
    },
    data () {
      return {
        mode: 'one',
        selectedGame: null,
        games: [],
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
        width: 100%;
    }

    .display {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
    }
</style>
<template>
    <div class="content">
        <!-- Form on visit explorer -->
        <div class="item" v-show="mode === 'one'">
            <div style="width: 300px; margin-left: 10px; margin-top: 5px; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <vm-game-list
                    @selected="selected"
                    @showUpdateForm="showUpdateForm"
                    @click.native="mode='two'"
            />
        </div>
        <!-- Form if click on Any game-->
        <div v-show="mode === 'two'">
            <div style="width: 300px; margin-left: 10px; margin-top: 5px; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <div style="display: flex;">
                <div>
                    <vm-game-list
                            @selected="selected"
                    />
                </div>
                <div>
                    <vm-game-display
                            :game="selectedGame"
                    />
                    <div style="width: 500px; margin-top: 5px;">
                        <vm-bar
                                @click.native="mode='one'"
                        >
                            Back to the list
                        </vm-bar>
                    </div>
                </div>
            </div>
        </div>
        <!-- Form on click Create Game -->
        <div v-show="mode === 'three'">
            <vm-game-create-form/>
            <div style="width: 600px; margin-top: 5px;">
                <vm-bar
                        @click.native="mode='one'"
                >
                    Back to the list
                </vm-bar>
            </div>
        </div>
        <!-- Form on click Update -->
        <div v-show="mode === 'four'">
            <div>
                    <vm-game-update-form
                            :game="selectedGame"
                    />
                <div style="width: 600px; margin-top: 5px;">
                    <vm-bar
                            @click.native="mode='one'"
                    >
                        Back to the list
                    </vm-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import VmGameDisplay from './GameDisplay'
  import VmGameList from './GameList'
  import VmBar from '../Universal/Bar'
  import VmGameCreateForm from './GameCreateForm.vue'
  import VmGameUpdateForm from './GameUpdateForm.vue'

  export default {
    name: 'VmGameListExplorer',
    components: {
      VmGameUpdateForm,
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
      showUpdateForm (game) {
        this.selectedGame = game
        console.log(game)
        this.mode = 'four'
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
</style>
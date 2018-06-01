<template>
    <div class="content">
        <!-- Form on visit explorer -->
        <div class="item" v-show="mode === 'one'">
            <div style="width: 50%; margin: auto; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <div style="margin-top: 10px;">
                <vm-game-list
                        @selected="selected"
                        @showUpdateForm="showUpdateForm"
                        @click.native="mode='two'"
                />
            </div>

        </div>
        <!-- Form if click on Any game-->
        <div class="item-mode-two" v-show="mode === 'two'">
            <div style="width: 50%; margin: auto; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <div style="display: flex; margin-top: 10px; ">
                <div style="border-right: 1px solid white;">
                    <vm-game-list
                            @selected="selected"
                            @showUpdateForm="showUpdateForm"
                            @click.native="mode='two'"
                    />
                </div>
                <div style="width: 100%">
                    <vm-game-display
                            :game="selectedGame"
                    />
                    <div style="margin: 5px auto; width: 50%;">
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
        <div class="item-mode-two" v-show="mode === 'three'">
            <div style="width: 50%; margin: auto; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <div style="display: flex; margin-top: 10px; ">
                <div style="border-right: 1px solid white;">
                    <vm-game-list
                            @selected="selected"
                            @showUpdateForm="showUpdateForm"
                            @click.native="mode='two'"
                    />
                </div>
                <div style="width: 100%;">
                    <vm-game-create-form
                            style="width: 95%; margin: 0px auto;"

                    />
                    <div style="margin: 5px auto; width: 50%;">
                        <vm-bar
                                @click.native="mode='one'"
                        >
                            Back to the list
                        </vm-bar>
                    </div>
                </div>
            </div>
        </div>
        <!-- Form on click Update -->
        <div class="item-mode-two" v-show="mode === 'four'">
            <div style="width: 50%; margin: auto; ">
                <vm-bar
                        @click.native="mode='three'"
                >
                    Create new game
                </vm-bar>
            </div>
            <div style="display: flex; margin-top: 10px; ">
                <div style="border-right: 1px solid white;">
                    <vm-game-list
                            @selected="selected"
                            @showUpdateForm="showUpdateForm"
                            @click.native="mode='two'"
                    />
                </div>
                <div style="width: 100%;">
                    <vm-game-update-form
                            style="width: 95%; margin: 0px auto;"
                            :game="selectedGame"
                    />
                    <div style="margin: 5px auto; width: 50%;">
                        <vm-bar
                                @click.native="mode='one'"
                        >
                            Back to the list
                        </vm-bar>
                    </div>
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
        align-items: center;
        margin: 100px 0px 5px 0px;
        background: #404b62;
        width: 100%;
        margin: 100px auto;
    }

    .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .item-mode-two {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>
<template>
  <div class="game-list-explorer__body">
    <!-- Form on visit explorer -->
    <div class="game-list-explorer__item" v-show="mode === 'one'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
          class="game-list-explorer__create-bar"
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
    <div class="game-list-explorer__item__mode-two" v-show="mode === 'two'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div>
          <vm-game-list
            @selected="selected"
            @showUpdateForm="showUpdateForm"
            @click.native="mode='two'"
          />
        </div>
        <div>
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
    <div class="game-list-explorer__item__mode-two" v-show="mode === 'three'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div>
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
    <div class="game-list-explorer__item__mode-two" v-show="mode === 'four'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div>
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

<style lang="scss">
  .game-list-explorer {
    &__body {
      position: relative;
      width: 60%;
      margin: 20px auto;
    }
    &__container{
      display: flex;
    }
    &__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      &__mode-two {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
    &__create-button{
      margin: 10px 10px;
    }
  }
</style>
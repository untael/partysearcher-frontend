<template>
  <div class="game-list-explorer__body">
    <!-- Form on visit explorer -->
    <div class="game-list-explorer__panel" v-if="mode === 'one'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
          class="game-list-explorer__create-bar"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__left-panel">
        <vm-game-list
          @selected="selected"
          @showUpdateForm="showUpdateForm"
          @click.native="mode='two'"
        />
      </div>
    </div>
    <!-- Form if click on Any game-->
    <div class="game-list-explorer__panel" v-if="mode === 'two'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div class="game-list-explorer__left-panel">
          <vm-game-list
            @selected="selected"
            @showUpdateForm="showUpdateForm"
            @click.native="mode='two'"
          />
        </div>
        <div class="game-list-explorer__right-panel">
          <vm-game-display
            :game="selectedGame"
          />
        </div>
      </div>
    </div>
    <!-- Form on click Create Game -->
    <div class="game-list-explorer__panel" v-if="mode === 'three'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div class="game-list-explorer__left-panel">
          <vm-game-list
            @selected="selected"
            @showUpdateForm="showUpdateForm"
            @click.native="mode='two'"
          />
        </div>
        <div class="game-list-explorer__right-panel">
          <vm-game-create-form
          />
        </div>
      </div>
    </div>
    <!-- Form on click Update -->
    <div class="game-list-explorer__panel" v-if="mode === 'four'">
      <div class="game-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create new game
        </vm-bar>
      </div>
      <div class="game-list-explorer__container">
        <div class="game-list-explorer__left-panel">
          <vm-game-list
            @selected="selected"
            @showUpdateForm="showUpdateForm"
            @click.native="mode='two'"
          />
        </div>
        <div class="game-list-explorer__right-panel">
          <vm-game-update-form
            :game="selectedGame"
          />
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
    &__panel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    &__create-button{
      margin: 10px 10px;
      min-width: 720px;
    }
    &__left-panel{
      width:40%;
    }
    &__right-panel{
      width:60%;
    }
  }
</style>
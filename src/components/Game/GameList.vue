<template>
  <div class="gamelist__body">
    <div class="gamelist__container">
      <vm-game-list-item
        :game="game"
        v-for="game in games"
        :key="game.id"
        :name="game.name"
        @click.native="$emit('selected', game)"
        @sendGameData="$emit('showUpdateForm', game)"
      >
      </vm-game-list-item>
    </div>
  </div>
</template>

<script>
  import VmGameListItem from './GameListItem.vue'
  import axios from 'axios'
  import Game from './Game'

  export default {
    name: 'VmGameList',
    components: {
      VmGameListItem,
    },
    data () {
      return {
        games: [],
      }
    },
    methods: {
      sendGameDataToUpdate (game) {
        const payload = {
          game: game,
        }
        this.emit('showUpdateForm', payload)
      },
    },
    created: function () {
      axios.post('http://localhost:3000/api/gamelist', {
        game: this.game,
      })
        .then(response => {
          console.log(response.data)
          this.games = response.data.map(gameData => new Game(gameData))
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>
<style lang="scss">
  .gamelist {
    &__body {
      width: 420px;
      border-radius: 2px;
      border: 0px;
      background: black;
      margin-left: 10px;
    }
    &__container {
      /*border: 1px solid white;*/
      display: flex;
      flex-direction: column;
    }
  }

</style>
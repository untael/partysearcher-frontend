<template>
  <div class="gamelist-container">
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
<style>
  .gamelist-container {
    /*border: 1px solid white;*/
    width: 420px;
    display: flex;
    flex-direction: column;
    border: 0px;
    border-radius: 4px;
    background: #404b62;
    margin-left: 10px;
  }

</style>
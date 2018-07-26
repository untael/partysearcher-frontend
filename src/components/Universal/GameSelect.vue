<template>
  <div>
    <div>
      <v-select
        class="select__body"
        v-model="valueProxy"
        :options="gameNames"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Game from '../Game/Game'
  import vSelect from 'vue-select'

  export default {
    name: 'VmGameSelect',
    components: {
      vSelect,
    },
    data () {
      return {
        games: [],
      }
    },
    props: {
      game: {
        type: Game,
      },
    },
//    methods: {
//      getGameNames () {
//        let gameName = null
//        this.games.forEach(function (game) {
//          gameName = game.name
//          console.log(gameName)
//        })
//        return gameName
//      },
//    },
    computed: {
      gameNames () {
        let gameName = null
        let gameNames = []
        this.games.forEach(function (game) {
          gameName = game.name
          gameNames.push(gameName)
        })
        return gameNames
      },
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },
    created () {
      axios.get('http://localhost:3000/gamelist', {
        game: this.game,
      })
        .then(response => {
//          console.log(response.data)
          this.games = response.data.map(gameData => new Game(gameData))
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
    ,
  }
</script>

<style lang="scss">
  .select {
    &__body {
      width: 100%;
      background: white;
    }
  }
</style>
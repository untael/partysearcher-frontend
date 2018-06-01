<template>
    <div>
        <div>
            <v-select
                    class="select_body"
                    v-model="valueProxy"
                    :options="getGameNames1"
            />
            <button
                    @click="getGameNames"
            >
                fdsafasd
            </button>
            <!--<select-->
            <!--class="select_body"-->
            <!--v-model="valueProxy"-->
            <!--size="3"-->
            <!--&gt;-->
            <!--<option disabled>Choose the game</option>-->
            <!--<option-->
            <!--v-for="game in games"-->
            <!--:game="game"-->
            <!--:key="game.id"-->
            <!--:name="game.name"-->
            <!--&gt;-->
            <!--{{game.name}}-->
            <!--</option>-->
            <!--</select>-->
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
    methods: {
      getGameNames () {
        let gameName = null
        this.games.forEach(function (game) {
          console.log(game)
          gameName = game
        })
        return gameName
      },
    },
    computed: {
      getGameNames1 () {
        let gameName = null
        this.games.forEach(function (game) {
          console.log(game)
          gameName = game
        })
        return {
          label: gameName,
        }
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
    created: function () {
      axios.get('http://localhost:3000/gamelist', {
        game: this.game,
      })
        .then(response => {
          console.log(response.data)
          this.games = response.data.map(gameData => new Game(gameData))
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
    ,
  }
</script>

<style>
    .select_body {
        width: 100%;
        background: white;
    }
</style>
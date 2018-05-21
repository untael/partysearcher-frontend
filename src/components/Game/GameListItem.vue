<template>
    <div style="width: 480px; display: flex;">
        <div class="game-list-item-block">
            <vm-bar>
                {{game.name}}
            </vm-bar>
        </div>
        <div style="margin-left: 5px;">
            <div class="game-list-update-button">
                <button
                        style="width:70px"
                        @click.stop="$emit('sendGameData')"
                >
                    Update
                </button>
            </div>
            <div class="game-list-delete-button">
                <button
                        style="width:70px"
                        @click.stop="deleteGame"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import VmBar from '../Universal/Bar'
  import VmGameDisplay from '../Game/GameDisplay.vue'
  import Game from './Game'
  import axios from 'axios'

  export default {
    name: 'VmGameListItem',
    components: {
      VmGameDisplay,
      VmBar,
    },
    data () {
      return {
        mode: 'one',
      }
    },
    props: {
      game: {
        type: Game,
        required: true,
      },
    },
    methods: {
      deleteGame () {
//        console.log(this.game)
        axios.post('http://localhost:3000/delete-game',{
          game: this.game,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch( e => {
            this.errors.push(e)
          })
      },
    },
  }
</script>

<style>
    .game-list-item-block {
        margin-left: 10px;
        margin-bottom: 5px;
        width: 300px;
        margin-top: 10px;
    }

    .game-list-update-button {
        margin-top: 25%;
    }

    .game-list-delete-button {
        margin-bottom: 25%;
    }
</style>

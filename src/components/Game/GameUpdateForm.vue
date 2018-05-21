<template>
    <div class="gamecreateform-border">
        <div class="gamecreateform-body">
            <div>
                <vm-input
                        v-model="game.name"
                />
            </div>
            <div>
                <vm-text-area
                        v-model="game.description"
                />
            </div>
            <div style="text-align:right;">
                <button
                        @click="submit()"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>

  import VmInput from '../Universal/Input'
  import VmTextArea from '../Universal/Textarea'
  import Game from './Game'
  import axios from 'axios'

  export default {
    name: 'VmGameUpdateForm',
    components: {
      VmInput,
      VmTextArea,
    },
    props: {
      game: {
        type: Game,
      },
    },
    methods: {
      submit () {
//        console.log(this.game)
        axios.post('http://localhost:3000/update-game', {
          game: this.game,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
  }
</script>

<style>
    .gamecreateform-border {
        width: 600px;
        height: 250px;
        border: solid 1px white;
        /*margin-left: 20%;*/
        /*margin-top: 10%;*/
    }

    .gamecreateform-body {
        margin: 5px 5px 5px 5px;
    }
</style>

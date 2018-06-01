<template>
    <div class="gamecreateform-container">
        <div class="gamecreateform-body">
            <div>
                <div style="margin-left: 5px; color: white; font-size: 16pt;">
                    Name
                </div>
                <vm-input
                        v-model="game.name"
                />
            </div>
            <div>
                <div style="margin-left: 5px; color: white; font-size: 16pt;">
                    Description
                </div>
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
    .gamecreateform-container {
        align-items: center;
        margin: auto;
        border: 2px solid white;
        background: #404b62;
        width: 60%;
        margin: 100px auto;
    }

    .gamecreateform-body {
        margin: 5px 5px 5px 5px;
    }
</style>

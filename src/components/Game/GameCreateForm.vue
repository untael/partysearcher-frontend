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
                <div style="margin-left: 5px; margin-top: 5px; color: white; font-size: 16pt;">
                    Description
                </div>
                <vm-text-area
                        v-model="game.description"
                />
            </div>
            <div style="margin-top: 5px;">
                <vm-bar
                        @click.native="submit()"
                >
                    Add game to database
                </vm-bar>
            </div>
        </div>
    </div>
</template>

<script>

  import VmInput from '../Universal/Input'
  import VmTextArea from '../Universal/Textarea'
  import Game from './Game'
  import axios from 'axios'
  import VmBar from '../Universal/Bar.vue'

  export default {
    name: 'VmGameCreateForm',
    components: {
      VmBar,
      VmInput,
      VmTextArea,
    },
    data () {
      return {
        game: new Game,
      }
    },
    methods: {
      submit () {
//        console.log(this.game)
        axios.post('http://localhost:3000/create-game', {
          game: this.game,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.game = {};
      },
    },
  }
</script>

<style>
    .gamecreateform-container {
        align-items: center;
        margin: auto;
        border: 4px solid #404b62;
        border-radius: 4px;
        background: #404b62;
        width: 60%;
        margin: 100px auto;
    }

    .gamecreateform-body {
        margin: 5px 5px 5px 5px;
    }
</style>

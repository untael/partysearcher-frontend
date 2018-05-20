<template>
    <div class="gamecreateform-body">
        <div>
            <div class="text">
                Save the game to DataBase
            </div>
            <vm-input
                    v-model="game.name"
            />
        </div>
        <div>
        <vm-text-area
                v-model="game.description"
        />
        </div>
        <button style="border: 1px solid black; border-radius: 5px;"
                @click="submit()"
        >
            Save
        </button>
    </div>
</template>

<script>

  import VmInput from '../Universal/Input'
  import VmTextArea from '../Universal/Textarea'
  import Game from './Game'
  import axios from 'axios'

  export default {
    name: 'VmGameCreateForm',
    components: {
      VmInput,
      VmTextArea,
    },
    data () {
      return {
        game: new Game ,
      }
    },
    methods: {
      submit () {
//        console.log(this.game)
        axios.post('http://localhost:3000/create-game',{
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
    .gamecreateform-body{
        width: 60%;
        margin-left: 20%;
        margin-top: 10%;
    }
    .text{
        color: white;
        font-size:36pt;
        text-align: center;
        margin-bottom: 10px;
        }
</style>

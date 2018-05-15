<template>
    <div class="body    ">
        <div class="input">
            <input
                    name="name"
                    v-model="game.name"
            />
        </div>
        <div class="input">
        <textarea
                name="description"
                v-model="game.description"
        />
        </div>
        <button
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
        game: new Game,
      }
    },
    methods: {
      submit () {
//        console.log(this.game)
        axios.post('http://localhost:3000/create-game',{
          game: this.game,
//          name: this.game.name,
//          description: this.game.description
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
    .body{
    }
    .input{
        width: 300px;
    }
</style>
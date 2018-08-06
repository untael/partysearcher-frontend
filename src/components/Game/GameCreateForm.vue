<template>
  <div class="game-create-form__body">
    <div class="game-create-form__container">
        <div class="game-create-form__header-name">
          Name
        </div>
        <vm-input
          class="game-create-form__input-name"
          v-model="game.name"
        />
        <div class="game-create-form__header-description">
          Description
        </div>
        <vm-text-area
          class="game-create-form__input-description"
          v-model="game.description"
        />
      <div>
        <vm-bar
          class="game-create-form__button"
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
        this.game = {}
      },
    },
  }
</script>

<style lang="scss">
  .game-create-form {

    &__container {
    }
    &__body {
      margin: auto;
      border-radius: 2px;
      background: black;
      width: 60%;
      min-width: 400px;
      margin: 100px auto;
    }
    &__header-name {
      border: 4px solid black;
      background: #212121;
      font-size: 14pt;
      color: white;
    }
    &__header-description {
      border: 4px solid black;
      margin: auto;
      background: #212121;
      font-size: 14pt;
      color: white;
    }
    &__input-name{
      border: 4px solid black;
    }
    &__input-description{
      border: 4px solid black;
    }
    &__button{
      border: 4px solid black;
    }
  }
</style>

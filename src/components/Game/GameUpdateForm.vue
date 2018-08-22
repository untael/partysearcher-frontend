<template>
  <div class="game-update-form__body">
    <div class="game-update-form__container">
      <div class="game-update-form__header-name">
        Name:
      </div>
      <vm-input
        class="game-update-form__input-name"
        v-model="game.name"
      />
      <div class="game-update-form__header-description">
          Description:
      </div>
      <vm-text-area
        class="game-update-form__input-description"
        v-model="game.description"
      />
      <div>
        <vm-bar
          class="game-update-form__button"

          @click.native="submit()"
        >
          Update game in database
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
    name: 'VmGameUpdateForm',
    components: {
      VmBar,
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
        axios.post('http://localhost:3000/api/update-game', {
          game: this.game,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.$destroy()
      },
    },
  }
</script>

<style lang="scss">
  .game-update-form {
    &__body {
      min-width: 400px;
    }
    &__container {
      border-radius: 2px;
      margin: 0px 10px;
      background: black;
    }
    &__header-name {
      border: 4px solid black;
      border-radius: 4px;
      background: #212121;
      font-size: 14pt;
      color: white;
    }
    &__input-name {
      border: 0px;
      margin: 4px 4px;
    }
    &__header-description {
      border: 4px solid black;
      margin: auto;
      background: #212121;
      font-size: 14pt;
      color: white;
    }
    &__input-description {
      border: 0px;
      margin: 4px 4px;
    }
    &__button{
      border: 4px solid black;
    }
  }

  .gameupdateform-container {
    align-items: center;
    margin: auto;
    border: 4px solid #404b62;
    border-radius: 4px;
    background: #404b62;
    width: 60%;
    margin: 100px auto;
  }

  .gameupdateform-body {
    margin: 5px 5px 5px 5px;
  }
</style>

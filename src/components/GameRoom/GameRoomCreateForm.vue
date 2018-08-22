<template>
  <div class="game-room-create-form__body">
    <div class="game-room-create-form__container">
      <div class="game-room-create-form__left-panel">
        <div class="game-room-create-form__text__header">
          Create your game room with 2 simple steps
        </div>
        <div class="game-room-create-form__text">
          1. Choose game what you wanna play
        </div>
        <vm-game-select
          class="game-room-create-form__select"
          v-model="gameRoom.game"
        />
        <div class="game-room-create-form__text">
          2. What you wanna do in game?
        </div>
        <vm-text-area
          class="game-room-create-form__textarea"
          v-model="gameRoom.description"
        />
        <button
          @click="submit"
          class="game-room-create-form__submit-button">
          Create
        </button>
      </div>
      <div class="game-room-create-form__right-panel">
        <div class="game-room-create-form__text__header">
          Optional
        </div>
        <div class="game-room-create-form__text">
          Age of players
        </div>
        <div class="game-room-create-form__checkbox-group">
          <input class="game-room-create-form__checkbox-group__input"
                 type="checkbox" id="kid" value="kid" v-model="picked">
          <label class="game-room-create-form__text__checkbox-label"
                 for="kid">kid</label>
          <input class="game-room-create-form__checkbox-group__input"
                 type="checkbox" id="young" value="young" v-model="picked">
          <label class="game-room-create-form__text__checkbox-label"
                 for="young">young</label>
          <input class="game-room-create-form__checkbox-group__input"
                 type="checkbox" id="adult" value="adult" v-model="picked">
          <label class="game-room-create-form__text__checkbox-label"
                 for="adult">adult</label>
          <input class="game-room-create-form__checkbox-group__input"
                 type="checkbox" id="elderly" value="elderly"
                 v-model="picked">
          <label class="game-room-create-form__text__checkbox-label"
                 for="elderly">elderly</label>
        </div>
        <div class="game-room-create-form__text">
          Priority language
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VmInput from '../Universal/Input.vue'
  import VmTextArea from '../Universal/Textarea.vue'
  import GameRoom from './GameRoom'
  import VmGameSelect from '../Universal/GameSelect.vue'
  import Game from '../Game/Game'
  import axios from 'axios'

  export default {
    name: 'VmGameRoomCreateForm',
    components: {
      VmGameSelect,
      VmTextArea,
      VmInput,
    },
    data () {
      return {
        game: new Game,
        gameRoom: new GameRoom,
        mode: 'one',
      }
    },
    props: {
      searchingGame: {
        type: String,
      },
    },
    methods: {
      submit () {
        const maker = localStorage.getItem('username')
        this.gameRoom.users.push(maker)
        console.log(this.gameRoom)
        axios.post('http://localhost:3000/api/create-gameroom', {
          gameRoom: this.gameRoom,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      sendGameName () {
        this.game = this.gameRoom.game
        this.$emit('gameName', this.game)
        console.log(this.game)
      },
    },
  }

</script>

<style lang="scss">
  .game-room-create-form {
    &__body {
      min-width: 480px;
    }
    &__select {
      width: 80%;
      margin: 10px auto;
    }
    &__container {
      display: flex;
    }
    &__left-panel {
      border-radius: 2px;
      margin: 0px 10px;
      background: black;
      width: 70%;
      display: flex;
      flex-direction: column;
    }
    &__right-panel {
      border-radius: 2px;
      background: black;
      margin-right: 10px;
      width: 30%;
      display: flex;
      flex-direction: column;
    }
    &__text {
      color: white;
      margin: 10px auto;
      &__header {
        font-size: 18pt;
        text-align: center;
        color: white;
        background: #212121;
        border: 4px solid black;
      }
      &__checkbox-label {
        font-size: 12pt;
        color: white;
      }
    }
    &__textarea {
      margin: 10px auto;
      width: 80%;
    }
    &__submit-button {
      cursor: pointer;
      background: #0e86ca;
      width: 80%;
      height: 40px;
      border: 1px solid #00aeff;
      border-radius: 1px;
      color: white;
      margin: 10px auto;
    }
    &__checkbox-group {
      /*margin-right: 10px;*/
      display: flex;
      justify-content: center;
      &__input {
        margin-left: 10px;
        margin-top: 1px;
      }
    }
  }
</style>
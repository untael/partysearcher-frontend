<template>
  <div class="game-list-item__body">
    <div class="game-list-item__container">
      <vm-bar>
        {{game.name}}
      </vm-bar>
    </div>
    <div class="game-list-item__button-container">
        <img
          class="game-list-item__icon-edit"
          @click.stop="$emit('sendGameData')"
          src="../../Images/edit.png"
        >
        <img
          id="delete-button"
          class="game-list-item__icon-delete"
          src="../../Images/delete.png"
          @click.stop="confirmDelete"
        >
      <img
        style="display: none;"
        id="confirm-delete-button"
        class="game-list-item__icon-delete"
        src="../../Images/check.png"
        @click.stop="deleteGame"
      >
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
        axios.post('http://localhost:3000/api/delete-game', {
          game: this.game,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      confirmDelete () {
        document.getElementById('delete-button').style.display = 'none'
        document.getElementById('confirm-delete-button').style.display = 'block'
      }
    },
  }
</script>

<style lang="scss">
  .game-list-item {
    &__body {
      display: flex;
      margin: 10px auto;
    }
    &__container {
      width: 300px;
    }
    &__update-button {
      width: 100%;
      color: white;
      font-size: 10pt;
    }
    &__delete-button {
      width: 100%;
      color: red;
      font-size: 10pt;
    }
    &__button-container {
      display: flex;
      flex-direction: column;
      /*margin: auto 5px;*/
      border: 1px solid #212121;
    }
    &__icon-edit:hover{
      cursor: pointer;
      background: #212121;
    }
    &__icon-delete:hover{
      cursor: pointer;
      background: red;
    }
  }
</style>

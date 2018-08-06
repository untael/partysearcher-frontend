<template>
  <div class="game-list-item__body">
    <div class="game-list-item__bar">
      <vm-bar>
        {{game.name}}
      </vm-bar>
    </div>
    <!--<div class="game-list-item__button-container">-->
    <!--<div>-->
    <!--<button-->
    <!--class="game-list-item__update-button"-->
    <!--@click.stop="$emit('sendGameData')"-->
    <!--&gt;-->
    <!--Edit-->
    <!--</button>-->
    <!--</div>-->
    <!--<div>-->
    <!--<button-->
    <!--class="game-list-item__delete-button"-->
    <!--@click.stop="deleteGame"-->
    <!--&gt;-->
    <!--X-->
    <!--</button>-->
    <!--</div>-->
    <!--</div>-->
    <div class="dropdown">
      <button onclick="gameActions()" class="dropbtn">?</button>
      <div id="myDropdown" class="dropdown-content">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>

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
      gameActions () {
        document.getElementById('myDropdown').classList.toggle('show')
      },
      deleteGame () {
//        console.log(this.game)
        axios.post('http://localhost:3000/delete-game', {
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

<style lang="scss">
  .game-list-item {
    &__body {
      display: flex;
      margin: 10px auto;
    }
    &__bar {
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
    }
  }

  .dropbtn {
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* Dropdown button on hover & focus */
  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {
    display:block;
  }

  .dropdown-content li {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
</style>

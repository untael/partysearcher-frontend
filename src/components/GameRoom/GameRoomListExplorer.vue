<template>
  <div class="game-room-list-explorer__body">
    <!-- Form on visit explorer -->
    <div class="game-room-list-explorer__panel" v-if="mode === 'one'">
      <div class="game-room-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create your gameroom
        </vm-bar>
      </div>
      <div class="game-room-list-explorer__left-panel">
        <vm-game-room-list
          @selected="selected"
          @click.native="mode='two'"
        />
      </div>
    </div>
    <!-- Form on click any gameroom -->
    <div class="game-room-list-explorer__panel" v-if="mode === 'two'">
      <div class="game-room-list-explorer__create-button">
        <vm-bar
          @click.native="mode='three'"
        >
          Create your gameroom
        </vm-bar>
      </div>
      <div class="game-room-list-explorer__container">
        <div class="game-room-list-explorer__left-panel">
          <vm-game-room-list
            @selected="selected"
          />
        </div>
        <div class="game-room-list-explorer__right-panel">
          <vm-game-room-display
            :gameRoom="selectedGameRoom"
          />
          <button
            class="game-room-list-explorer__join-button"
          >
            Join this room

          </button>
        </div>
      </div>
    </div>
    <div class="game-room-list-explorer__panel" v-if="mode === 'three'">
      <div class="game-room-list-explorer__create-button">
        <vm-bar
          @click.native="mode='one'"
        >
          Back to room list
        </vm-bar>
      </div>
      <div class="game-room-list-explorer__container">
        <div class="game-room-list-explorer__left-panel__create-panel">
          <vm-game-room-create-form
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VmGameRoomDisplay from './GameRoomDisplay'
  import VmGameRoomList from './GameRoomList'
  import VmBar from '../Universal/Bar'
  import VmGameRoomCreateForm from './GameRoomCreateForm.vue'

  export default {
    name: 'VmGameRoomListExplorer',
    components: {
      VmGameRoomCreateForm,
      VmGameRoomDisplay,
      VmGameRoomList,
      VmBar,
    },
    data () {
      return {
        mode: 'one',
        selectedGameRoom: null,
        gameRooms: [],
      }
    },
    methods: {
      selected (gameRoom) {
        this.selectedGameRoom = gameRoom
        console.log(gameRoom)
      },
    },
  }
</script>

<style lang="scss">
  .game-room-list-explorer {
    &__body {
      position: relative;
      width: 60%;
      margin: 20px auto;
    }
    &__panel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

    }
    &__container {
      display: flex;
    }
    &__list {
      width: 40%;
    }
    &__left-panel {
      border-radius: 2px;
      width: 40%;
      &__create-panel {
        width: 100%;
      }
    }
    &__right-panel {
      border-radius: 2px;
      width: 60%;
      display: flex;
      flex-direction: column;
    }
    &__create-button {
      margin: 10px 10px;
      min-width: 720px;
    }
    &__join-button {
      cursor: pointer;
      background: #0e86ca;
      width: 95%;
      height: 40px;
      border: 1px solid #00aeff;
      border-radius: 1px;
      color: white;
      margin: 0px auto;
    }
  }
</style>
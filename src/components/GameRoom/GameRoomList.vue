<template>
  <div class="game-room-list__body">
    <div class="game-room-list__search">
      <input type="text" v-model="search" placeholder="Type your game"
             class="game-room-list__search__input"
      />
    </div>
    <div class="game-room-list__container">
      <vm-game-room-list-item
        :gameRoom="gameRoom"
        v-for="gameRoom in filteredGameRooms"
        :key="gameRoom.id"
        @selected="$emit('selected', gameRoom)"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GameRoom from './GameRoom'
  import VmGameRoomListItem from './GameRoomListItem.vue'

  export default {
    name: 'VmGameRoomList',
    components: {
      VmGameRoomListItem,
    },
    data () {
      return {
        gameRooms: [],
        gameName: {
          type: String,
          default: null,
        },
        search: '',
      }
    },
    created: function () {
      axios.get('http://localhost:3000/api/gameroomlist', {
        gameRoom: this.gameRoom,
      })
        .then(response => {
          console.log(response.data)
          this.gameRooms = response.data.map(gameRoomData => new GameRoom(gameRoomData))
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    computed: {
      filteredGameRooms: function () {
        return this.gameRooms.filter((gameRoom) => {
          return gameRoom.game.match(this.search)
        })
      },
    },
  }
</script>
<style lang="scss">
  .game-room-list {
    &__body {
      background: black;
      min-width: 320px;
      margin-left: 10px;
    }
    &__container {
      display: flex;
      flex-direction: column;
      margin: auto;
    }
    &__search {
      width: 100%;
      align-content: center;
      &__input {
        width: 100%;
        min-width: 320px;
        border: 0px;
        height: 30px;
        text-indent: 15px;
        background: white;
        margin: 10px auto;
      }
    }
  }
</style>
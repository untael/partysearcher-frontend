<template>
    <div>
        <div class="game-room-list-search">
            <input type="text" v-model="search" placeholder="Type your game"
                   class="game-room-list-search-input"/>
        </div>
        <div class="game-room-list-container">
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
      axios.get('http://localhost:3000/gameroomlist', {
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
<style>
    .game-room-list-container {
        /*border: 1px solid white;*/
        width: 420px;
        display: flex;
        flex-direction: column;
        border: 0px;
        border-radius: 4px;
        background: #404b62;
        margin: auto;
    }

    .game-room-list-search-input {
        width: 420px;
        border: 2px solid #00aeee;
        border-radius: 4px;
        margin: auto;
        height: 30px;
        text-indent: 15px;
        background: #242d44;
    }

    .game-room-list-search {
        width: 420px;
        margin: 10px auto;
    }

</style>
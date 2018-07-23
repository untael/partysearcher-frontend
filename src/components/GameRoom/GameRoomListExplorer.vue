<template>
    <div class="game-room-explorer-container">
        <div class="game-room-list" id="mode-one" v-show="mode === 'one'">
                <vm-game-room-list
                        @selected="showInfo"
                />
        </div>
        <div class="game-room-item-info" id="mode-two" hidden v-show="mode === 'two'">
            <div class="about-room">
                About this room
            </div>
            <div class="game-room-info">
                    <vm-game-room-display
                            :gameRoom="selectedGameRoom"
                    />
                    <div style="margin: 5px auto; display: flex; width: 100%;">
                        <div style="flex: 0.5 1 45%;">
                            <vm-bar
                                @click.native="closeInfo"
                        >
                            Back to the list
                        </vm-bar>
                        </div>
                        <div style="flex: 0.5 1 45%;">
                            <vm-bar
                                    @click.native="closeInfo"
                            >
                                Connect
                            </vm-bar>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
  import VmGameRoomDisplay from './GameRoomDisplay'
  import VmGameRoomList from './GameRoomList'
  import VmBar from '../Universal/Bar'

  export default {
    name: 'VmGameRoomListExplorer',
    components: {
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
      showInfo (gameRoom) {
        this.selectedGameRoom = gameRoom
        let divTwo = document.getElementById('mode-two')
        divTwo.style.display = 'block'
        console.log(gameRoom)
      },
      closeInfo () {
        let divTwo = document.getElementById('mode-two')
        divTwo.style.display = 'none'
      }
    },
  }
</script>

<style>
    .game-room-explorer-container {
        position: relative;
        align-items: center;
        background: #404b62;
        border-radius: 30px;
        width: 100%;
        height:100%;
        margin: 100px auto;
        display: flex;
    }

    .game-room-list {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
    }

    .game-room-item-info {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        display: none;
    }

    .game-room-info {
        margin-top: 20px;
        margin-right: 10%;
    }

    .about-room{
        font-size: 18pt;
        text-align: center;
        margin-right: 10%;
        margin-top: 20px;
        color: white;
    }
</style>
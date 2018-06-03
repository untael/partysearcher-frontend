<template>
    <div style="width: 420px; display: flex;">
        <div class="game-list-item-block">
            <vm-bar>
                {{gameRoom.username}}
            </vm-bar>
        </div>
        <div style="margin: auto auto auto 0px; display: flex">
            <div>
                <button
                        class="gamelistitem-update-button"
                        @click.stop="$emit('sendGameData')"
                >
                    Connect
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import VmBar from '../Universal/Bar'
  import axios from 'axios'
  import GameRoom from './GameRoom'

  export default {
    name: 'VmGameRoomListItem',
    components: {
      VmBar,
    },
    data () {
      return {
        mode: 'one',
      }
    },
    props: {
      gameRoom: {
        type: GameRoom,
        required: true,
      },
    },
    methods: {
    },
  }
</script>

<style>
    .game-list-item-block {
        /*margin-left: 10px;*/
        /*margin-bottom: 5px;*/
        width: 300px;
        /*margin-top: 10px;*/
        margin: 10px auto;
    }

    .gamelistitem-update-button {
        width: 100%;
        margin: auto;
        color: white;
        background: #242d44;
        border: 1px solid white;
        border-radius: 4px;
        font-family: lfg2;
        font-size: 16pt;
    }
</style>

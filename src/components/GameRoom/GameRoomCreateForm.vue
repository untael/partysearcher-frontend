<template>
    <div>
        <div class="gameroom_block" v-show="mode === 'one'">
            <div style="color: white; font-size: 30pt; text-align: center; margin-top: 50px;">
                Write your nickname
            </div>
            <div style="color: white; font-size: 12pt; text-align: center; margin-top: 50px;">
                - Nickname can contain a-Z,0-9 and max size is 20 symbols
                <p/>
                - Some rule
                <p/>
                - Some rule
            </div>
                <div style="display: flex;">
                    <vm-input
                            class="gameroom_input"
                            v-model="gameRoom.username"
                    />
                    <button
                            class="gameroom_button"
                            @click="mode='two'"
                    >
                        Next step
                    </button>
            </div>
        </div>
        <div class="gameroom_block" v-show="mode === 'two'">
            <div style="display: flex;">
                <vm-game-select
                        class="gameroom_input"
                        v-model="gameRoom.game"
                />
                <button
                        class="gameroom_button"
                        @click="mode='three'"
                >
                    Next step
                </button>
            </div>
        </div>
        <div class="gameroom_block" v-show="mode === 'three'">
            <div>
                <vm-text-area
                        class="gameroom_textarea"
                        v-model="gameRoom.description"
                />
            </div>
            <button
                    style="height: 40px; width: 20%; margin-left: 40%;"
                    @click="submit(), mode='one'"
            >
                Find party
            </button>
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
    methods: {
      submit () {
        console.log(this.game)
        axios.post('http://localhost:3000/create-gameroom', {
          gameRoom: this.gameRoom,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.gameRoom = {};
      },
    },
  }

</script>

<style>
    .gameroom_block {
        background: dodgerblue;
        width: 500px;
        height: 600px;
        border: 1px solid white;
        border-radius: 3px;
    }

    .gameroom_input {
        width: 80%;
        margin-left: 15px;
        margin-top: 150px;
    }

    .gameroom_textarea {
        width: 95%;
        margin-left: 2.5%;
        margin-top: 70%;
    }

    .gameroom_button {
        height: 40px;
        margin-top: 150px;
    }
</style>
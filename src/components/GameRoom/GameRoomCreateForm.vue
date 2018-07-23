<template>
    <div>
        <div class="gameroom_container" v-show="mode === 'one'">
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
            <div style="display: flex;  margin-top: 100px;">
                <vm-input
                        class="gameroom_input"
                        v-model="gameRoom.username"
                />
                <button
                        class="gameroom_button"
                        @click="mode='two'"
                >
                    Next
                </button>
            </div>
        </div>
        <div class="gameroom_container" v-show="mode === 'two'">
            <div style="color: white; font-size: 30pt; text-align: center; margin-top: 50px;">
                Choose game what you wanna play
            </div>
            <div style="color: white; font-size: 12pt; text-align: center; margin-top: 50px;">
                - Choose game what you wanna play
                <p/>
                - Some rule
                <p/>
                - Some rule
            </div>
            <div style="display: flex; margin-top: 100px;">
                <vm-game-select
                        class="gameroom_input"
                        v-model="gameRoom.game"
                />
                <button
                        class="gameroom_button"
                        @click="mode='three'"
                >
                    Next
                </button>
            </div>
        </div>
        <div class="gameroom_container" v-show="mode === 'three'">
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
            <div style="margin-top: 100px;">
                <vm-text-area
                        class="gameroom_textarea"
                        v-model="gameRoom.description"
                />
            </div>
            <div style="display: flex; align-items: center; justify-content: center;">
                <router-link
                        :to="{name: 'gameroomlist'}"
                >
                    <button
                            class="gameroom_button"
                            style="height: 100%;"
                            @click="submit(), sendGameName(), mode='one'"
                    >
                        Find party
                    </button>
                </router-link>
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
        axios.post('http://localhost:3000/create-gameroom', {
          gameRoom: this.gameRoom,
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      sendGameName (){
        this.game = this.gameRoom.game;
        this.$emit('gameName', this.game)
        console.log(this.game)
      }
    },
  }

</script>

<style>
    .gameroom_container {
        height: 600px;
        align-items: center;
        margin: auto;
        border: 2px solid #404b62;
        border-radius: 4px;
        background: #404b62;
        width: 60%;
        margin: 100px auto;
    }

    .gameroom_input {
        min-width: 80%;
        margin: auto;

    }

    .gameroom_textarea {
        width: 80%;
        margin: auto;
    }

    .gameroom_button {
        height: 40px;
        margin: 5px auto;
        color: white;
        background: #242d44;
        border: 0px;
        border-radius: 4px;
        font-family: lfg2;
        font-size: 18pt;
        width: 70px;
    }
</style>
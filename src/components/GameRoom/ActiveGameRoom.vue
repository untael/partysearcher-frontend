<template>
  <div class="active-game-room__body">
    <div class="active-game-room__container">
      <div class="active-game-room__left-panel">
        <div class="active-game-room__text__header">
          <!--{{gameRoom.name}}-->
          Test Room
        </div>
        <div class="active-game-room__left-panel__chat">
          <div class="active-game-room__left-panel__messages-box">

          </div>
        </div>
        <div class="active-game-room__left-panel__message-box">
          <div class="active-game-room__left-panel__message-box__input-block">
            <vm-input
              class="active-game-room__left-panel__message-box__input-block__input"
            />
          </div>
          <div class="active-game-room__left-panel__message-box__send-block">
            <button
              class="active-game-room__left-panel__message-box__send-block__send-button">
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="active-game-room__right-panel">
        <div class="active-game-room__text__header">
          Users in room
        </div>

        <div class="active-game-room__right-panel__user-list">

        </div>
        <div class="active-game-room__right-panel__leave-button-block">
          <button
            class="active-game-room__right-panel__leave-button-block__leave-button">
            Leave room
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import VmInput from '../Universal/Input.vue'

  export default {
    components: { VmInput },
    name: 'VmActiveGameRoom',
  }
</script>

<style lang="scss">
  .active-game-room {
    &__body {
      border-radius: 2px;
      background-color: black;
    }
    &__container {
      display: flex;
    }
    &__left-panel {
      width: 70%;
      display: flex;
      flex-direction: column;

      &__chat {
        background: #212121;
        min-height: 400px;
        margin: 2px 4px;
      }
      &__message-box {
        display: flex;
        align-self: center;
        width: 100%;
        margin: 2px 4px;

        &__input-block {
          margin: 0px 4px;
          width: 80%;
          height: 40px;
          &__input {
          }
        }
        &__send-block {
          margin: 0px 4px;
          width: 20%;
          &__send-button {
            padding: 0px;
            width: 100%;
            cursor: pointer;
            background: #0e86ca;
            height: 38px;
            border: 1px solid #00aeff;
            border-radius: 1px;
            color: white;
          }
        }
      }
    }
    &__right-panel {
      width: 30%;
      display: flex;
      flex-direction: column;

      &__user-list {
        background: #212121;
        min-height: 400px;
        margin: 2px 4px;

      }
      &__leave-button-block {
        display: flex;
        align-self: center;
        width: 100%;
        margin: 2px 4px;

        &__leave-button {
          padding: 0px;
          cursor: pointer;
          background: red;
          width: 100%;
          /*width: 200px;*/
          height: 38px;
          color: white;
          border: 1px solid orangered;
          border-radius: 1px;
          margin: 0px 4px;
        }
      }
    }
    &__text {
      color: white;
      margin: 10px auto;
      &__header {
        font-size: 18pt;
        text-align: center;
        color: white;
        background: #212121;
        margin: 4px 4px;
      }
    }
  }
</style>
<template>
  <div class="active-game-room">
    <div class="active-game-room__body">
      <div class="active-game-room__body__left">
        <div class="active-game-room__left__title">
          Warcraft 3 room by Adios
        </div>
        <div class="active-game-room__left__chat">

        </div>
        <div class="active-game-room__left__message-input">

        </div>
      </div>
      <div class="active-game-room__body__right">
        <div class="active-game-room__body__right__user-list">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VmActiveGameRoom',
  }
</script>

<style lang="scss">
  .active-game-room {

    &__body {
      display: flex;
      border-radius: 30px;
      background-color: #404b62;

      &__left {
        width: 70%;
        border-right: 2px solid #00aeee;

        &__title {
          color: white;
          align: left;
        }

        &__chat {

        }
        &__message-input {

        }
      }

      &__right {
        width: 30%;
        &__user-list {
        }
      }
    }
  }
</style>
<template>
    <div class="display-container">
        <div class="display-header-name">
            Username:
        </div>
        <div class="display-name">
            {{gameRoom.username}}
        </div>
        <div class="display-header-game">
            Game:
        </div>
        <div class="display-name">
            {{gameRoom.game}}
        </div>
        <div class="display-header-description">
            Description
        </div>
        <div class="display-description">
            {{gameRoom.description}}
        </div>
        <slot/>
    </div>
</template>

<script>

  import GameRoom from './GameRoom'

  export default {
    name: 'VmGameRoomDisplay',
    props: {
      gameRoom: {
        type: GameRoom,
      },
    },
  }

</script>

<style>
    .display-header-name{
        font-size: 9pt;
        color: lightgrey;
        border-bottom: 1px solid #00aeee;
        background: #242d44;
        margin: 2px 2px 2px 2px;
    }
    .display-header-game{
        font-size: 9pt;
        color: lightgrey;
        border-top: 1px solid #00aeee;
        border-bottom: 1px solid #00aeee;
        background: #242d44;
        margin: 2px 2px 2px 2px;

    }
    .display-header-description{
        font-size: 9pt;
        color: lightgrey;
        border-top: 1px solid #00aeee;
        border-bottom: 1px solid #00aeee;
        background: #242d44;
        margin: 2px 2px 2px 2px;
    }
    .display-container{
        /*border: 1px solid #242d44;*/
        border-radius: 4px;
        width: 100%;
        margin: auto;
        background: #323c53;
        border: 2px solid #00aeee;

    }
    .display-name {
        margin: 5px 5px 5px 5px;
        color: white;
    }

    .display-description {
        margin: 5px 5px 5px 5px;
        color: white;
        height: 200px;
        width: 100%;
    }
</style>
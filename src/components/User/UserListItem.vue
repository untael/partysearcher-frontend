<template>
    <div style="width: 420px; display: flex;">
        <div class="game-list-item-block">
            <vm-bar
                    @click.native="$emit('selected', user)"
            >
                {{user.username}}
            </vm-bar>
        </div>
        <!--<div style="margin: auto auto auto 0px; display: flex">-->
        <!--<div>-->
        <!--<button-->
        <!--class="gamelistitem-update-button"-->
        <!--@click.stop="$emit('sendGameRoomData')"-->
        <!--&gt;-->
        <!--Connect-->
        <!--</button>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
  import VmBar from '../Universal/Bar'
  import User from './User'

  export default {
    name: 'VmUserListItem',
    components: {
      VmBar,
    },
    props: {
      user: {
        type: User,
        required: true,
      },
    },
  }
</script>

<style>
    .game-list-item-block {
        width: 90%;
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

    .game-room-list-item-game{
        font-size:9pt;
    }
</style>

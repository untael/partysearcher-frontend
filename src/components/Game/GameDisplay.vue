<template>
    <div class="block">
        <div class="display-header-name">
            Name:
        </div>
        <div class="display-name">
            {{game.name}}
        </div>
        <div class="display-header-description">
            Description
        </div>
        <div class="display-description">
            {{game.description}}
        </div>
        <slot/>
    </div>
</template>

<script>

  import Game from './Game'

  export default {
    name: 'VmGameDisplay',
    props: {
      game: {
        type: Game,
      },
    },
  }

</script>

<style>
    .display-header-name{
        border-bottom: 1px solid white;
        font-size: 9pt;
        color: lightgrey;
        border-bottom: 1px solid white;
    }
    .display-header-description{
        border-bottom: 1px solid white;
        font-size: 9pt;
        color: lightgrey;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    .block{
        border: 2px solid white;
        width: 500px;
        margin-top: 10px;
        /*margin-left: 20%;*/
        /*margin-top: 10%;*/
    }
    .display-name {
        margin: 5px 5px 5px 5px;
        color: white;
    }

    .display-description {
        margin: 5px 5px 5px 5px;
        color: white;
        height: 200px;
    }
</style>
<template>
    <div class="block">
        <div class="header">
            {{game.name}}
        </div>
        <div class="main">
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
        required: true,
      },
    },
  }

</script>

<style>
    .block{
        background-color: #76b4f2;
    }
    .header {
        margin: 5px 5px 5px 5px;
        background-color: #76b4f2;
        color: white;
    }

    .main {
        margin: 5px 5px 5px 5px;
        background-color: #76b4f2;
        color: white;
        height: 200px;
    }
</style>
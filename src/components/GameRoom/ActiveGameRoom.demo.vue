<template>
  <div>
    <div class="demo-container">
      <div class="demo-container__item" style="width: 1000px; background-color: #405275">
        <vm-active-game-room/>
      </div>
    </div>
  </div>
</template>

<script>

  import VmActiveGameRoom from './ActiveGameRoom'

  export default {
    components: {
      VmActiveGameRoom
    },
  }
</script>
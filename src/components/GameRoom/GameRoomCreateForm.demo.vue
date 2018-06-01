<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1000px; background-color: #405275">
                <vm-game-room-create-form/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmGameRoomCreateForm from './GameRoomCreateForm.vue'

  export default {
    components: {
      VmGameRoomCreateForm,
    },

  }
</script>
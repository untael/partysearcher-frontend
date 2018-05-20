<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 1000px; background-color: #405275">
                <vm-game-create-form/>
            </div>
        </div>
    </div>
</template>

<script>
    import VmGameCreateForm from './GameCreateForm'
  export default {
    components: {
      VmGameCreateForm,
    },
  }
</script>
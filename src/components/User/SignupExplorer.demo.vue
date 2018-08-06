<template>
  <div>
    <div class="demo-container">
      <div class="demo-container__item"
           style="width: 1000px; background-color: #405275">
        <vm-signup-explorer/>
      </div>
    </div>
  </div>
</template>

<script>

  import VmSignupExplorer from './SignupExplorer.vue'

  export default {
    components: {
      VmSignupExplorer,
    },
  }
</script>
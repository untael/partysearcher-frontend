<template>
    <div class="demo-container">
      <div class="demo-container__item"
           style="width: 1000px; background-color: #405275">
        <vm-signup-form/>
      </div>
    </div>
</template>

<script>


  import VmSignupForm from './SignupForm.vue'

  export default {
    components: {
      VmSignupForm
    },
  }
</script>
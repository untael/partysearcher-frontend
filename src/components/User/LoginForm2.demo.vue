<template>
  <div>
    <div class="demo-container">
      <div class="demo-container__item"
           style="width: 1000px; background-color: #405275">
        <vm-login-form2/>
      </div>
    </div>
  </div>
</template>

<script>
  import VmLoginForm2 from './LoginForm2.vue'

  export default {
    components: {
      VmLoginForm2,
    },
  }
</script>
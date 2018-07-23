<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1000px; background-color: #405275">
                <vm-login-form/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmLoginForm from './LoginForm.vue'

  export default {
    components: {
      VmLoginForm,
    },
  }
</script>
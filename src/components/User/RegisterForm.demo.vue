<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1000px; background-color: #405275">
                <vm-register-form/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmRegisterForm from './RegisterForm'

  export default {
    components: {
      VmRegisterForm,
    },

  }
</script>
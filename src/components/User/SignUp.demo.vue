<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1000px; background-color: #405275">
                <vm-sign-up-form/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmSignUpForm from './SignUp'

  export default {
    components: {
      VmSignUpForm,
    },

  }
</script>
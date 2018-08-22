<template>
  <div>
    <vm-login-form2
      @closeLoginForm="$emit('closeLoginForm')"
      @clickedSignup="showSignupForm"
      id="login-form"
    />
    <vm-signup-form
      id="signup-form"
      @clickedLogin="showLoginForm"
    />
  </div>
</template>

<script>
  import VmLoginForm2 from './LoginForm2.vue'
  import VmSignupForm from './SignupForm.vue'

  export default {
    name: 'VmSignupExplorer',
    components: {
      VmSignupForm,
      VmLoginForm2,
    },
    methods: {
      showSignupForm () {
        const signupForm = document.getElementById('signup-form')
        const loginForm = document.getElementById('login-form')
        signupForm.style.display = 'block'
        loginForm.style.display = 'none'
      },
      showLoginForm () {
        const signupForm = document.getElementById('signup-form')
        const loginForm = document.getElementById('login-form')
        signupForm.style.display = 'none'
        loginForm.style.display = 'block'
      }
    },
  }
</script>

<style lang="scss">
  #signup-form {
    display: none;
  }

  #login-form {
    display: block;
  }

  .signup-explorer {
    &__login-form {

    }
    &__signup-form {
    }
  }
</style>
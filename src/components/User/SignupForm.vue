<template>
  <div class="signup-form">
    <div class="signup-form__body">
      <div class="signup-form__container">
        <div class="signup-form__label">
          Your nickname
        </div>
        <vm-input
          v-model="user.username"
          :placeholder="'Min 3 symbols'"
        />
      </div>
      <div class="signup-form__container">
        <div class="signup-form__label">
          Your password
        </div>
        <vm-input
          id="signupPassword"
          v-model="user.password"
          :placeholder="'Min 6 symbols'"
        />
      </div>
      <div class="signup-form__container">
        <div class="signup-form__label">
          Password confirm
        </div>
        <vm-input
          id="signupPasswordConfirm"
          v-model="user.passwordConfirm"
          :placeholder="'Min 6 symbols'"
        />
      </div>
      <div class="signup-form__container__button">
        <button
          @click="submit()"
          class="signup-form__submit-button">
          Submit
        </button>
        <div class="signup-form__error-message" id="errorMessage">
          {{signupErrorMessage}}
        </div>
        <div class="signup-form__login-message"
             @click="$emit('clickedLogin')">
          Back to the login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import User from './User'
  import VmInput from '../Universal/Input.vue'
  import VmBar from '../Universal/Bar.vue'
  import axios from 'axios'

  export default {
    name: 'VmSignupForm',
    components: {
      VmBar,
      VmInput,
    },
    data () {
      return {
        user: new User,
        resMessage: '',
        signupErrorMessage: '',
      }
    },
    methods: {
      submit () {
        const passwordDiv = document.getElementById('signupPassword')
        const passwordConfirmDiv = document.getElementById('signupPasswordConfirm')
        const errorMessage = document.getElementById('errorMessage')
        if (this.user.username.length < 3) {
          console.log(this.user.username.length)
          this.signupErrorMessage = 'Your nickname is too short'
          errorMessage.style.display = 'block'
        } else if (this.user.passwordConfirm !== this.user.password) {
          console.log(passwordDiv)
          passwordConfirmDiv.style.border = '1px solid red'
          passwordDiv.style.border = '1px solid red'
          errorMessage.style.display = 'block'
          this.signupErrorMessage = 'Passwords do not match'
        } else {
          console.log(this.user)
          axios.post('http://localhost:3000/signup', {
            user: this.user,
          })
            .then(response => {
              console.log(response.data)
            })
            .catch(e => {
              this.errors.push(e)
            })
          this.user = {}
        }
      },
    },
  }
</script>

<style lang="scss">
  .signup-form {
    &__login-message {
      cursor: pointer;
      text-align: center;
      color: #0e86ca;
      font-size: 9pt;
    }

    &__error-message {
      margin: 5px auto;
      text-align: center;
      color: red;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 8pt;
      display: none;
    }

    &__body {
      background-color: black;
      max-width: 240px;
      width: 100%;
      margin: 5px 20px;
      justify-content: center;
      border: 1px solid hsla(0, 0%, 100%, .18);
    }
    &__container {
      margin: 10px auto;
      width: 200px;
      &__button {
        margin: 20px auto;
        width: 200px;
      }
    }
    &__submit-button {
      cursor: pointer;
      background: #0e86ca;
      width: 200px;
      height: 40px;
      border: 1px solid #00aeff;
      border-radius: 1px;
      color: white;
      margin-bottom: 5px;
    }
    &__label {
      color: white;
      height: 25px;
      &__error {
        margin-top: 5px;
        color: red;
        height: 25px;
        display: none;
      }
    }

  }
</style>
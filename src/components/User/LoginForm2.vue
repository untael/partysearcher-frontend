<template>
  <div class="login-form2">
    <div class="login-form2__body">
      <div class="login-form2__container">
        <div class="login-form2__label">
          Your nickname
        </div>
        <vm-input
          v-model="user.username"
          :placeholder="'Min 3 symbols'"
        />
      </div>
      <div class="login-form2__container">
        <div class="login-form2__label">
          Your password
        </div>
        <vm-input
          id="password"
          v-model="user.password"
          :placeholder="'Min 6 symbols'"
          type="password"
        />
      </div>
      <div class="login-form2__container__button">
        <button
          @click="submit(),$emit('closeLoginForm')"
          class="login-form2__submit-button">
          Submit
        </button>
        <div class="login-form2__auth-message">
          {{resMessage}}
        </div>
        <div class="login-form2__register-message"
             @click="$emit('clickedSignup')">
          Don't have account? Register now
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
  import router from '../../Router/routes'

  export default {
    name: 'VmLoginForm2',
    components: {
      VmBar,
      VmInput,
    },
    data () {
      return {
        user: new User,
        resMessage: '',
      }
    },
    methods: {
      submit () {
        axios.post('http://localhost:3000/api/login', {
          user: this.user,
        })
          .then(response => {
            console.log(response.data.success)
            if (response.data.success === false) {
              this.resMessage = response.data.message
            }
            else {
              this.resMessage = response.data.message
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('userId', response.data.id)
              localStorage.setItem('username', response.data.username)
              this.$bus.$emit('logged', 'User logged')
              console.log(response.data)
              setTimeout(() => {
                router.push('/')
              }, 1500)
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
  }
</script>

<style lang="scss">
  .login-form2 {

    &__auth-message {
      text-align: center;
      color: red;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 8pt;
      margin: 5px auto;
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
    &__register-message {
      cursor: pointer;
      text-align: center;
      color: #0e86ca;
      font-size: 9pt;
    }
  }
</style>
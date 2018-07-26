<template>
  <div class="login-form__body">
    <div class="login-form__container">
      <div class="login-form__label">
        Your nickname
      </div>
      <vm-input
        v-model="user.username"
      />
    </div>
    <div class="login-form__container">
      <div class="login-form__label">
        Your password
      </div>
      <vm-input
        id="password"
        v-model="user.password"
      />
    </div>
    <div class="login-form__container__button">
      <button
        @click="submit()"
        class="login-form__submit-button">
        Submit
      </button>
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
    name: 'VmLoginForm',
    components: {
      VmBar,
      VmInput,
    },
    data () {
      return {
        user: new User,
      }
    },
    methods: {
      submit () {
//          console.log(this.user)
        axios.post('http://localhost:3000/api/login', {
          user: this.user,
        })
          .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.id)
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.user = {}
        router.push('/')
      },
    },
  }
</script>

<style lang="scss">
  .login-form {
    &__body {
      background-color: #404b62;
      margin: 100px auto;
      display: flex;
      flex-direction: row;
      border-radius: 30px;
      justify-content: center;
    }
    &__container {
      margin: 40px 25px auto;
      width: 200px;
      &__button {
        margin: 40px 15px 30px;
        width: 150px;
      }

    }
    &__submit-button {
      background: #00aeee;
      width: 150px;
      border: 0px;
      height: 40px;
      margin-top: 25px;
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
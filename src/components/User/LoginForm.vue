<template>
  <div class="login-form">
    <div class="login-form__auth-message">
      {{this.resMessage}}
    </div>
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
  .login-form {
    display: flex;
    flex-direction:column;

    &__auth-message{
      color: white;
      align: center;
      margin: 20px auto;
    }

    &__body {
      background-color: #404b62;
      width: 100%;
      margin:auto;
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
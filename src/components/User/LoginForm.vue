<template>
    <div class="login-form-body">
        <div class="login-form-container">
            <div class="login-form-label">
                Your nickname
            </div>
            <vm-input
                    v-model="user.username"
            />
        </div>
        <div class="login-form-container">
            <div class="login-form-label">
                Your password
            </div>
            <vm-input
                    id="password"
                    v-model="user.password"
            />
        </div>
        <div class="login-form-container-button">
            <button
                    @click="submit()"
                    class="login-form-submit-button">
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

  export default {
    name: 'VmLoginForm',
    components: {
      VmBar,
      VmInput
    },
    data () {
      return {
        user: new User,
      }
    },
    methods:{
      submit () {
//          console.log(this.user)
          axios.post('http://localhost:3000/login', {
            user: this.user,
          })
            .then(response => {
              console.log(response.data)
            })
            .catch(e => {
              this.errors.push(e)
            })
          this.user = {};
      }
    }
  }
</script>

<style lang="scss">
    .login-form-body{
        background-color: #404b62;
        margin: 100px auto;
        display: flex;
        flex-direction: row;
        border-radius: 30px;
        justify-content: center;
    }
    .login-form-container{
        margin: 40px 25px auto;
        width: 200px;
    }

    .login-form-container-button{
        margin: 40px 15px 30px;
        width: 150px;
    }
    .login-form-submit-button{
        background: #00aeee;
        width: 150px;
        border: 0px;
        height:40px;
        margin-top: 25px;
    }
    .login-form-label{
        color: white;
        height: 25px;
    }
    .login-form-label-error{
        margin-top: 5px;
        color: red;
        height: 25px;
        display: none;
    }
</style>
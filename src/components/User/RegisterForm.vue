<template>
    <div class="register-form-body">
        <div class="register-form-container">
            <div class="register-form-label">
                Your nickname
            </div>
            <vm-input
                    v-model="user.username"
            />
        </div>
        <div class="register-form-container">
            <div class="register-form-label">
                Your password
            </div>
            <vm-input
                    id="password"
                    v-model="user.password"
            />
        </div>
        <div class="register-form-container">
            <div class="register-form-label">
                Confirm your password
            </div>
            <vm-input
                    id="passwordConfirm"
                    v-model="user.passwordConfirm"
            />
            <div class="register-form-label-error" id="errorMessage">
                Passwords do not match
            </div>
        </div>
        <div class="register-form-container-button">
            <button
                    @click="submit()"
                    class="register-form-submit-button">
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
    name: 'VmRegisterForm',
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
        if (this.user.passwordConfirm !== this.user.password) {
          let passwordConfirmDiv = document.getElementById('passwordConfirm')
          let errorMessage = document.getElementById('errorMessage')
          passwordConfirmDiv.style.border = '1px solid red'
          errorMessage.style.display = 'block'
        }
        else {
          console.log(this.user)
          axios.post('http://localhost:3000/register', {
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
  }
</script>

<style lang="scss">
    .register-form-body{
        background-color: #404b62;
        margin: 100px auto;
        display: flex;
        flex-direction: row;
        border-radius: 30px;
        justify-content: center;
    }
    .register-form-container{
        margin: 40px 25px auto;
        width: 200px;
    }

    .register-form-container-button{
        margin: 40px 15px 30px;
        width: 150px;
    }
    .register-form-submit-button{
        background: #00aeee;
        width: 150px;
        border: 0px;
        height:40px;
        margin-top: 25px;
    }
    .register-form-label{
        color: white;
        height: 25px;
    }
    .register-form-label-error{
        margin-top: 5px;
        color: red;
        height: 25px;
        display: none;
    }
</style>
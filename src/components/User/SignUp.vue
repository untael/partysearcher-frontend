<template>
    <div class="signup-form__body">
        <div class="signup-form__container">
            <div class="signup-form__label">
                Your nickname
            </div>
            <vm-input
                    v-model="user.username"
            />
        </div>
        <div class="signup-form__container">
            <div class="signup-form__label">
                Your password
            </div>
            <vm-input
                    id="password"
                    v-model="user.password"
            />
        </div>
        <div class="signup-form__container">
            <div class="signup-form__label">
                Confirm your password
            </div>
            <vm-input
                    id="passwordConfirm"
                    v-model="user.passwordConfirm"
            />
            <div class="signup-form__label__error" id="errorMessage">
                Passwords do not match
            </div>
        </div>
        <div class="signup-form__container__button">
            <button
                    @click="submit()"
                    class="signup-form__submit-button">
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
    name: 'VmSignUpForm',
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
          axios.post('http://localhost:3000/signup', {
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
    .signup-form{
        &__body{
            background-color: #404b62;
            margin: 100px auto;
            display: flex;
            flex-direction: row;
            border-radius: 30px;
            justify-content: center;
        }
        &__container{
            margin: 40px 15px auto;
            width: 200px;
            &__button{
                margin: 40px 15px 30px;
                width: 150px;
            }
        }
        &__submit-button{
            background: #00aeee;
            width: 150px;
            border: 0px;
            height:40px;
            margin-top: 25px;
        }
        &__label{
            color: white;
            height: 25px;
            &__error{
                margin-top: 5px;
                color: red;
                height: 25px;
                display: none;
            }
        }
    }
</style>
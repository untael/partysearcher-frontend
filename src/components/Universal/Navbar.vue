<template>
  <div class="navbar__container">
    <div class="navbar__left">
      <router-link
        :to="{path: '/'}"
      >
        <vm-logo
          class="navbar__left__logo"
        />
      </router-link>
    </div>
    <div class="navbar__center">
      <div class="navbar__bar">
        <router-link
          :to="{name: 'gamelist'}"
        >
          <vm-bar2
          >
            Games
          </vm-bar2>
        </router-link>
      </div>
      <div class="navbar__bar">
        <router-link
          :to="{name: 'gamecreateroom'}"
        >
          <vm-bar2
          >
            LFG
          </vm-bar2>
        </router-link>
      </div>
      <div class="navbar__bar">
        <router-link
          :to="{name: 'gameroomlist'}"
        >
          <vm-bar2
          >
            Gamerooms
          </vm-bar2>
        </router-link>
      </div>
      <div class="navbar__right" v-if="isLogged === true">
        <vm-user-profile-display
          class="navbar__right__profile"
        />
      </div>
      <div class="navbar__right-unautorized" v-if="isLogged === false">
        <div class="navbar__right-unautorized__buttons">
          <div @click="showLoginForm"
               ref="dropdownMenu">
            <div class="navbar__bar">
              <vm-bar2
              >
                SignUp
              </vm-bar2>
            </div>
            <div class="navbar__login-form" v-if="dropdownShow === true">
              <vm-signup-explorer
                @closeLoginForm="closeLoginForm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import VmBar from './Bar.vue'
  import VmBar2 from './Bar2.vue'
  import VmLogo from './Logo.vue'
  import VmUserProfileDisplay from '../User/UserProfileDisplay.vue'
  import VmInput from './Input.vue'
  import User from '../User/User'
  import VmLoginForm2 from '../User/LoginForm2.vue'
  import VmSignupExplorer from '../User/SignupExplorer.vue'

  export default {
    name: 'VmNavbar',
    components: {
      VmSignupExplorer,
      VmLoginForm2,
      VmInput,
      VmUserProfileDisplay,
      VmLogo,
      VmBar,
      VmBar2,
    },
    data () {
      return {
        user: new User,
        token: false,
        isLogged: this.checkIfIsLogged(),
        dropdownShow: false,
      }
    },
    created () {
//      console.log(localStorage.getItem('token'))
      this.$bus.$on('logged', () => {
        this.isLogged = this.checkIfIsLogged()
      })
      this.$bus.$on('logout', () => {
        this.isLogged = this.checkIfIsLogged()
      })
      document.addEventListener('click', this.documentClick)
//      if (localStorage.getItem('token') !== null) {
//        this.token = true
//      }
    },
    destroyed () {
      document.removeEventListener('click', this.documentClick)
    },
    methods: {
      closeLoginForm () {
        console.log(this.dropdownShow)
        console.log('1231')
        this.dropdownShow = false
        console.log(this.dropdownShow)
      },
      documentClick (e) {
        const el = this.$refs.dropdownMenu
        const target = e.target
        if (( el !== target) && !el.contains(target)) {
          this.dropdownShow = false
        }
      },
      checkIfIsLogged () {
        let token = localStorage.getItem('token')
        if (token) {
          return true
        } else {
          return false
        }
      },
      showLoginForm () {
        this.dropdownShow = true
      },
    },
  }
</script>

<style lang="scss">

  .navbar {
    &__bar {
      cursor: pointer;
    }

    &__login-form {
      position: absolute;
      right: -48px;
      top: 36px;
    }

    &__container {
      background: black;
      border-bottom: 1px solid hsla(0, 0%, 100%, .18);
      width: 100%;
      display: flex;
    }

    &__left {
      margin-right: 10px;
      margin-left: 80px;
      border-right: 2px solid white;
      &__logo {
        display: block;
        float: right;
        margin-right: 10px;
      }
    }

    &__right {
      width: 200px;
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
      &__profile {
        display: block;
        float: left;
        margin-left: 10px;
      }
    }

    &__right-unautorized {
      position: absolute;
      right: 80px;
      height: 100%;
      align-items: center;
      &__buttons {
        display: flex;
      }
    }

    &__center {
      display: flex;
    }
  }
</style>
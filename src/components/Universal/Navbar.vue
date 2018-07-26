<template>
  <div style="display: flex;">
    <div class="navbar__body">
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
        <div class="navbar__center-top">
          <div class="navbar__bar">
            <router-link
              :to="{name: 'gamelist'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Games
              </vm-bar>
            </router-link>
          </div>
          <div class="navbar__bar">
            <router-link
              :to="{name: 'gamecreateroom'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                LFG
              </vm-bar>
            </router-link>
          </div>
          <div class="navbar__bar">
            <router-link
              :to="{name: 'gameroomlist'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Gamerooms
              </vm-bar>
            </router-link>
          </div>
          <div class="navbar__bar">
            <router-link
              :to="{name: 'loginform'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Login
              </vm-bar>
            </router-link>
          </div>
          <div class="navbar__bar">
            <router-link
              :to="{name: 'signupform'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Register
              </vm-bar>
            </router-link>
          </div>
        </div>
        <div class="navbar__center-bottom">
          <vm-input
          />
        </div>
      </div>
      <div class="navbar__right" v-if="token">
        <vm-user-profile-display
          class="navbar__right__profile"
        />
      </div>
      <div class="navbar__right-unautorized" v-if="!token">
        <div class="navbar__right-unautorized__buttons">
          <div class="navbar__bar">
            <router-link
              :to="{name: 'loginform'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Login
              </vm-bar>
            </router-link>
          </div>
          <div class="navbar__bar">
            <router-link
              :to="{name: 'signupform'}"
            >
              <vm-bar
                class="navbar__bar-content"
              >
                Register
              </vm-bar>
            </router-link>
          </div>
        </div>
        <div class="navbar__right-unautorized__message">
          Registered members have more filters and capabilities
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import VmBar from './Bar.vue'
  import VmLogo from './Logo.vue'
  import VmUserProfileDisplay from '../User/UserProfileDisplay.vue'
  import VmInput from './Input.vue'
  import User from '../User/User'

  export default {
    name: 'VmNavbar',
    components: {
      VmInput,
      VmUserProfileDisplay,
      VmLogo,
      VmBar,
    },
    data () {
      return {
        user: new User,
        token: false,
      }
    },
    created () {
//      console.log(localStorage.getItem('token'))
      if (localStorage.getItem('token') !== null) {
        this.token = true;
      }
    },
  }
</script>

<style lang="scss">

  .navbar {
    &__bar-content.bar .bar-content {
      font-size: 12pt;
    }

    &__body {
      align-items: center;
      margin: 5px 0px 5px 0px;
      background: #404b62;
      width: 100%;
      display: flex;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border: 2px solid #007fad;
    }

    &__left {
      width: 200px;
      margin-right: 10px;
      margin-left: 10px;
      border-right: 1px solid #007fad;
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
      border-left: 1px solid #007fad;
      &__profile {
        display: block;
        float: left;
        margin-left: 10px;
      }
    }

    &__right-unautorized {
      width: 200px;
      height: 100%;
      /*display: flex;*/
      /*flex: 1 1 auto;*/
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
      border-left: 1px solid #007fad;
      &__buttons{
        display: flex;
        margin: 10px 10px auto;
      }
      &__message{
        color: white;
        text-align: center;
        margin-top: 5px;
      }
    }

    &__center {
    }

    &__bar {
      width: 90px;
      border-left: solid 2px #007fad;
      border-right: solid 2px #007fad;
      margin-left: -2px;
    }
    &__center-top {
      display: flex;
      height: 50%;
    }

    &__center-bottom {
      height: 50%;
      margin-top: 10px;
    }
  }
</style>
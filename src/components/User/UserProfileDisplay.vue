<template>
  <div id="user-profile">
    <div class="user-profile-display__body">
      <div class="user-profile-display__container">
        <div class="user-profile-display__nickname">
          {{user.username}}
        </div>
        <div class="user-profile-display__info">
          <div class="user-profile-display__property">
            <div class="user-profile-display__property__top">
              <div class="user-profile-display__icon">
              </div>
              <div class="user-profile-display__icon">
              </div>
            </div>
            <div class="user-profile-display__property__bottom">
              <div class=" user-profile-display__icon">
              </div>
              <div class="user-profile-display__icon">
              </div>
            </div>
          </div>
          <div class="user-profile-display__avatar">
          </div>
        </div>
      </div>
      <div class="user-profile-display__logout-block">
        <button
          class="user-profile-display__logout-button"
          @click="logout"
        >
          Edit
        </button>
        <button
          class="user-profile-display__logout-button"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import VmUserProfileEdit from './UserProfileEdit.vue'
  import VmBar from '../Universal/Bar.vue'
  import vSelect from 'vue-select'
  import User from './User'
  import axios from 'axios'

  export default {
    name: 'VmUserProfileDisplay',
    data () {
      return {
        user: {
          type: User,
        },
      }
    },
    components: {
      VmBar,
      VmUserProfileEdit,
      vSelect,
    },
    methods: {
      showSettings () {
        let profileEditDiv = document.getElementById('profile-settings')
        profileEditDiv.style.display = 'block'
      },
      logout () {
        localStorage.clear()
        this.$bus.$emit('logout', 'User logout')
      },
    },
    created () {
      axios.post('http://localhost:3000/api/profile-data', {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
      })
        .then(response => {
          this.user = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>

<style lang="scss">
  #user-profile {
  }

  .user-profile-display {

    &__logout-block {
      margin-left: 25px;
    }

    &__logout-button {
      border-color: transparent;
      background: transparent;
      cursor: pointer;
      color: white;
      font-size: 8pt;
    }

    &__body {
      background: transparent;
      width: 100%;
      display: flex;
    }

    &__avatar {
      height: 60px;
      width: 60px;
      background: white;
      margin: 5px auto;
      border-radius: 10px;
      border: 2px solid #00aeee;
    }

    &__info {
      display: flex;
    }

    &__property {
      height: 60px;
      width: 60px;
      display: flex;
      flex-direction: column;
      margin: 5px auto;
      &__top {
        display: flex;
        margin-top: 3px;
      }
      &__bottom {
        display: flex;
        margin-top: 3px;
      }
    }

    &__icon {
      height: 20px;
      width: 20px;
      background: white;
      margin: 2px 2px 2px 2px;
      border: 2px solid #00aeee;
    }

    &__container {
      margin: 0px auto;
      display: flex;
      flex-direction: column;
    }
    &__nickname {
      font-size: 16pt;
      text-align: center;
      color: white;
      width: 100%;
    }
  }
</style>
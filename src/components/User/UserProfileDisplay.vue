<template>
  <div>
    <div class="user-profile-display__body">
      <div class="user-profile-display__container">
        <div class="user-profile-display__nickname">
          user.nickname
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
    </div>
  </div>
</template>

<script>
  import VmUserProfileEdit from './UserProfileEdit.vue'

  export default {
    name: 'VmUserProfileDisplay',
    components: {
      VmUserProfileEdit,
    },
    methods: {
      showSettings () {
        let profileEditDiv = document.getElementById('profile-settings')
        profileEditDiv.style.display = 'block'
      },
    },
  }
</script>

<style lang="scss">
  .user-profile-display {
    &__body {
      align-items: center;
      background: transparent;
      width: 100%;
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
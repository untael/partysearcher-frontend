<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1000px; background-color: #405275">
                <vm-user-profile-display/>
            </div>
        </div>
    </div>
</template>

<script>

  import VmUserProfileDisplay from './UserProfileDisplay.vue'

  export default {
    components: {
      VmUserProfileDisplay
    },
  }
</script>
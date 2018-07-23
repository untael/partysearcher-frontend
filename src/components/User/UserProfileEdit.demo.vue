<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1000px; background-color: #405275">
                <vm-user-profile-edit/>
            </div>
        </div>
    </div>
</template>

<script>


  import VmUserProfileEdit from './UserProfileEdit.vue'

  export default {
    components: {
      VmUserProfileEdit
    },
  }
</script>
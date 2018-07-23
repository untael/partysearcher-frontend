<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item" style="width: 800px; background-color: #405275;">
                <vm-user-list/>
            </div>
        </div>
    </div>
</template>

<script>


  import VmUserList from './UserList.vue'

  export default {
    components: {
      VmUserList,
    },
    //need to see outcoming game on click
    methods: {
      selected (user) {
        console.log('users = ', user)
      },
    },
  }
</script>
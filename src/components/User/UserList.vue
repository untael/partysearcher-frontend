<template>
    <div class="gamelist-container">
        <div>
            <vm-user-list-item
                    :user="user"
                    v-for="user in users"
                    :key="user.id"
                    :name="user.username"
            />
        </div>
    </div>
</template>

<script>
  import VmGameListItem from '../Game/GameListItem'
  import axios from 'axios'
  import User from './User'
  import VmUserListItem from './UserListItem.vue'

  export default {
    name: 'VmUserList',
    components: {
      VmUserListItem,
      VmGameListItem,
    },
    data () {
      return {
        users: [],
      }
    },
    created: function () {
      axios.get('http://localhost:3001/userlist', {
        user: this.user,
      })
        .then(response => {
          console.log(response.data)
          this.users = response.data.map(userData => new User(userData))
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>
<style>
    .gamelist-container {
        /*border: 1px solid white;*/
        width: 420px;
        display: flex;
        flex-direction: column;
        border: 0px;
        border-radius: 4px;
        background: #404b62;
        margin-left: 10px;
    }

</style>
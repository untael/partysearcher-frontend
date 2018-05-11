<template>
  <div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import router from './Router/router'

export default {
  name: 'app',
  components: {
    router,
  },
}
</script>
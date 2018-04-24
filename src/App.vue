<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import router from './Router/router'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  router,
}
</script>
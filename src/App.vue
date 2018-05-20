<template>
    <div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
  import router from './Router/routes'

  export default {
    name: 'app',
    components: {
    },
    router,
  }
</script>
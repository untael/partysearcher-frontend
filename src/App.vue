<template>
    <div>
        <router-view>
            <hello-world>

            </hello-world>
        </router-view>
    </div>
</template>

<script>
  import router from './Router/routes'
  import VmHelloWorld from './components/HelloWorld'
  import HelloWorld from '../node_modules/@vue/cli-service/generator/template/src/components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      VmHelloWorld,
    },
    router,
  }
</script>
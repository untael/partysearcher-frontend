<template>
    <div class="navbar-container">
            <div class="navbar-left">
                <router-link
                        :to="{path: '/'}"
                >
                    <vm-logo/>
                </router-link>

            </div>
            <div class="navbar-right">
                <div class="navbar-bar">
                    <router-link
                            :to="{name: 'creategame'}"
                    >
                        <vm-bar>
                            Create Game
                        </vm-bar>
                    </router-link>
                </div>
                <div class="navbar-bar">
                    <router-link
                            :to="{name: 'gamelist'}"
                    >
                        <vm-bar>
                            Game explorer
                        </vm-bar>
                    </router-link>
                </div>
                <div class="navbar-bar">
                    <router-link
                            :to="{name: 'gamelist'}"
                    >
                        <vm-bar>
                            Look for party
                        </vm-bar>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
  import VmBar from './Bar.vue'
  import VmLogo from './Logo.vue'

  export default {
    components: {
      VmLogo,
      VmBar,
    },
    name: 'VmNavbar',
  }
</script>

<style>
    .navbar-container {
        align-items: center;
        margin: 5px 0px 5px 0px;
        border-bottom: 3px solid white;
        background: #404b62;
        width: 100%;
        display: flex;
    }

    .navbar-left {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    .navbar-bar {
        width: 200px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .navbar-right{
        display: flex;
        flex: 1 0 auto;
        justify-content: flex-end;
    }
</style>
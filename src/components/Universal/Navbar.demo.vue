<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 1200px; background-color: #405275">
                <vm-navbar/>
            </div>
        </div>
    </div>
</template>


<script>

  import VmNavbar from './Navbar.vue'

  export default {
    components: {
      VmNavbar,
    },
  }
</script>

<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 400px; background-color: #405275">
                <vm-input
                        :name="name"
                        @writed="writed"
                />
            </div>
        </div>
    </div>
</template>

<script>
  import VmInput from './Input'

  export default {
    components: {
      VmInput,
      data () {
        return {
          writedName: null,
        }
      },
      methods: {
        writed (name) {
          this.writedName = name
        },
      },
    },
  }
</script>
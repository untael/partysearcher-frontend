<template>
    <div>
        <div style="margin-left: 5px; color: white; font-size: 16pt;">
            Name
        </div>
        <input class="input-body"
               v-model="valueProxy"
               placeholder="Write Game Name"
        >
    </div>
</template>

<script>

  export default {
    name: 'VmInput',
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    //to parent
    computed: {
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },
  }
</script>

<style>
    .input-body {
        width: 100%;
        height: 40px;
        margin-bottom: 5px;
    }
</style>
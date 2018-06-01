<template>
    <div>
        <input class="input-body"
               v-model="valueProxy"
        >
    </div>
</template>

<script>

  export default {
    name: 'VmInput',
    props: {
      value: {
        type: String,
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
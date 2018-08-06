<template>
  <div>
    <input
      class="input__body"
      v-model="valueProxy"
      :placeholder="placeholder"
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
      placeholder: {
        type: String,
        default: null,
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

<style lang="scss">
  .input {
    &__body {
      width: 100%;
      height: 40px;
      background: #424242;
      border: 0px;
      border-radius: 1px;
      color: white;
      text-indent: 10px;
    }
  }
</style>
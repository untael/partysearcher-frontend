<template>
  <div>
    <input
      class="input__body"
      v-model="valueProxy"
      :placeholder="placeholder"
      :type="type"
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
      type: {
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
      /*background: #424242;*/
      height: 36px;
      background: white;
      border: 0px;
      border-radius: 1px;
      text-indent: 10px;
      color: black;
    }
  }

  input:focus {
    outline: 2px solid white;
  }
</style>
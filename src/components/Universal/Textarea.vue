<template>
  <div>
        <textarea class="textarea__body"
                  v-model="valueProxy"
        />
  </div>
</template>

<script>
  export default {
    name: 'VmTextarea',
    props: {
      value: {
        type: String,
      },
    },
    computed: {
      //to parent
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
  .textarea {
    &__body {
      min-height: 100px;
      resize: none;
      width: 100%;
      color: white;
      margin: auto;
      background: #424242;
      border: 0px;
      border-radius: 2px;
      text-indent: 10px;
      padding: 0px;
    }
  }
</style>
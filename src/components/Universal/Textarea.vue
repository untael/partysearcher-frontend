<template>
    <div>
        <textarea class="textarea-body"
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
      }
    },
    computed: {
      //to parent
      valueProxy: {
        get(){
          return this.value
        },
        set(value){
          this.$emit('input', value)
        }
      }
    }
  }
</script>

<style>
    .textarea-body{
        width: 100%;
        min-height: 100px;
        resize: none;
    }
</style>
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
        min-height: 100px;
        resize: none;
        width: 100%;
        color: white;
        margin: auto;
        background: #242d44;
        border: 0px;
        border-radius: 4px;
        text-indent: 10px;
        padding: 0px;
    }
</style>
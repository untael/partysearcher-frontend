<template>
    <div>
        <div style="margin-left: 5px; color: white; font-size: 16pt;">
            Description
        </div>
        <textarea class="textarea-body"
                type="text"
                v-model="valueProxy"
                placeholder="Write game description"
        />
    </div>
</template>

<script>
  export default {
    name: 'VmTextarea',
    props: {
      value: {
        type: String,
        required: true,
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
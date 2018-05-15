<template>
    <div>
        <div style="margin-left: 5px; color: white; font-size: 16pt;">
            Name
        </div>
        <input class="input-body"
               type="text"
               v-model="valueProxy"
               placeholder="Write Game Name"
        >
    </div>
</template>

<script>

  export default {
    name: 'VmInput',
    props: {
      name: {
        type: String,
      },
    },
    //to parent
    computed: {
      valueProxy: {
        get(){
          return this.name
        },
        set(name){
          this.$emit('input', name)
        }
      }
    }
  }
</script>

<style>
    .input-body {
        width: 100%;
        height: 40px;
        margin-bottom: 5px;
    }
</style>
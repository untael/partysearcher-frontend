<template>
    <div>
        <input
                type="text"
                v-model="name"
                placeholder="Write Game Name"
        >
        <button
                v-on:click="getName"
        >
            save
        </button>
    </div>
</template>

<script>

  export default {
    name: 'VmInput',
    data () {
      return {
        name: null,
      }
    },
    props: {
      name: {
      }
    },
    methods: {
      getName () {
        console.log(this.name)
        this.$emit('writed', name)
      },
    },
  }
</script>
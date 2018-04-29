<template>
    <div>
        <textarea
                type="text"
                v-model="description"
                placeholder="Write game description"
                :description="description"
        />
        <button
                v-on:click="getDescription"
        >
            save
        </button>
    </div>
</template>

<script>
  export default {
    name: 'VmTextarea',
    data () {
      return {
        description: null,
      }
    },
//    props: {
//      description: {
//        required: true,
//      },
//    },
    methods: {
      getDescription () {
        console.log(this.description)
      },
    },
  }
</script>
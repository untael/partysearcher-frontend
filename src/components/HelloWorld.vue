<template>
    <div class="main-body">
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .main-body {
        background-color: lightskyblue;
        min-height: 700px;
        width: 100%;
        overflow: hidden;
        margin-left:10%;
        margin-right:10%;
    }
</style>

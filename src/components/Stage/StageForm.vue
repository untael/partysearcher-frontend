<template>
    <div class="bar">
        <div class="header">
            {{stage.title}}
        </div>
        <div class="main">
            {{stage.description}}
        </div>
        <div class="block__input">
            <div>
                <input class="input"
                       size="50"
                       placeholder="Write here"
                />
                <button style="margin-right: 50px;"
                >Next
                </button>
            </div>
        </div>
        <slot/>
    </div>
</template>

<script>
  import Stage from './Stage'

  export default {
    name: 'VmStageForm',
    props: {
      stage: {
        type: Stage,
        required: true,
      },
    },
  }
</script>

<style>
    .header {
        margin-top: 100px;
        text-align: center;
        color: white;
        font-size: 26pt;
        font-style: italic;
    }

    .main {
        margin-top: 20px;
        text-align: center;
        color: white;
        font-size: 14pt;
        font-style: italic;
    }

    .bar {
        border: 2px solid #218FFE;
        border-radius: 10px;
        background-color: #218FFE;
        overflow: hidden;
        width: 500px;
        height: 550px;
    }

    .block__input {
        margin-top: 150px;
    }

    .input {
        width: 350px;
        /*margin-right: 30%;*/
        margin-left: 50px;
    }
</style>
<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="height:600px;width: 600px; background-color: #405275">
                <vm-stage-form
                       :stage="stage"
                />
            </div>
        </div>
    </div>
</template>

<script>

    import VmStageForm from './StageForm'
  export default {
    components: {
      VmStageForm,
    },
    data () {
      return {
        stage:{
          title: 'Step 1: Write your nickname',
          description: '- The nickname can contain a-Z and 1-9',
        }
      }
    },
  }
</script>
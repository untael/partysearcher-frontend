<template>
    <div>
        <div class="demo-container">
            <div class="demo-container__item"
                 style="width: 400px; background-color: #405275">
                <vm-text-area/>
            </div>
        </div>
    </div>
</template>

<script>
  import VmTextArea from './Textarea'

  export default {
    components: {
      VmTextArea,
    },
  }
</script>
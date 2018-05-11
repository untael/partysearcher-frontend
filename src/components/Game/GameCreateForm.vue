<template>
    <div>
        <div>
            <input
                    name="name"
                    v-model="game.name"
            />
        </div>
        <div>
        <textarea
                name="description"
                v-model="game.description"
        />
        </div>
        <button
                @click="submit()"
        >
            Save
        </button>
    </div>
</template>

<script>

  import VmInput from '../Universal/Input'
  import VmTextArea from '../Universal/Textarea'
  import Game from './Game'

  export default {
    name: 'VmGameCreateForm',
    components: {
      VmInput,
      VmTextArea,
    },
    data () {
      return {
        game: new Game,
      }
    },
    methods: {
      submit () {
        console.log(this.game)
      },
    },
  }
</script>
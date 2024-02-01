<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
export default {
  props: {
    meal: {
      strInstructions: String
    }
  },
  name: 'InstructionSection',
  components: { IconArrowDown },
  data() {
    return {
      showInstruction: true
    }
  },
  methods: {
    toggleInstructionSection() {
      this.showInstruction = !this.showInstruction
    }
  }
}
</script>

<template>
  <div
    class="mb-5 flex cursor-pointer items-center gap-2 text-left font-body"
    @click="toggleInstructionSection"
  >
    <h2>Instructions</h2>
    <IconArrowDown class="text-xl" />
  </div>
  <div class="" v-show="showInstruction">
    <p class="whitespace-pre-line">{{ meal?.strInstructions }}</p>
  </div>
</template>

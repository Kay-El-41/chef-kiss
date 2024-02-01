<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
export default {
  props: {
    meal: {
      strMeal: String,
      strYoutube: String
    }
  },
  name: 'InstructionVideoSection',
  components: { IconArrowDown, Youtube: LiteYouTubeEmbed },
  data() {
    return {
      showInstructionVideo: true,
      player: null
    }
  },

  methods: {
    toggleInstructionVideoSection() {
      this.showInstructionVideo = !this.showInstructionVideo
    }
  }
}
</script>

<template>
  <div
    class="mb-5 flex cursor-pointer items-center gap-2 text-left font-body"
    @click="toggleInstructionVideoSection"
  >
    <h2>Instruction Video</h2>
    <IconArrowDown class="text-xl" />
  </div>
  <div class="overflow-hidden lg:rounded-lg" v-show="showInstructionVideo">
    <Youtube :id="meal?.strYoutube?.split('=')[1]" :title="meal?.strMeal" />
  </div>
</template>

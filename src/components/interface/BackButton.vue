<script>
import IconBack from '@/components/icons/IconBack.vue'
export default {
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.back()
    }
  },
  components: { IconBack }
}
</script>

<template>
  <button class="flex items-center gap-1 pb-6 hover:text-red-500" @click="goBack">
    <IconBack />Back
  </button>
</template>

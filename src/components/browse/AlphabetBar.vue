<script>
export default {
  name: 'AlphabetBar',
  props: {
    currentAlphabet: String
  },
  emits: ['submitSearch'],
  data() {
    return {
      alphabets: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  methods: {
    handleSubmitSearch(alphabet) {
      this.$emit('submitSearch', alphabet)
    }
  }
}
</script>

<template>
  <div
    class="md:grid-cols-15 mt-2 grid grid-cols-8 justify-items-center gap-2 sm:grid-cols-9 lg:grid-cols-12 xl:flex xl:flex-wrap xl:justify-center"
  >
    <button
      v-for="alphabet in alphabets"
      @click="() => handleSubmitSearch(alphabet)"
      :key="alphabet"
      class="h-10 w-10 rounded-lg border hover:border-red-500"
      :class="currentAlphabet === alphabet && 'bg-red-500 text-white'"
    >
      {{ alphabet }}
    </button>
  </div>
</template>

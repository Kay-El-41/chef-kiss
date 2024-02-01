<script>
export default {
  name: 'BrowseMethods',
  emits: ['changeBrowseMethod'],
  props: {
    currentMethod: 'search' || 'alphabet' || 'category' || 'country'
  },
  methods: {
    onClickMethod(name) {
      this.$emit('changeBrowseMethod', name)
    }
  }
}
</script>

<template>
  <div class="flex w-full justify-around *:rounded-xl *:border *:border-red-500 *:px-3 *:py-1">
    <button
      @click="() => onClickMethod('search')"
      :class="currentMethod === 'search' && 'bg-red-500 text-white'"
    >
      Search
    </button>
    <button
      @click="() => onClickMethod('category')"
      :class="currentMethod === 'category' && 'bg-red-500 text-white'"
    >
      Category
    </button>
    <button
      @click="() => onClickMethod('country')"
      :class="currentMethod === 'country' && 'bg-red-500 text-white'"
    >
      Country
    </button>
    <button
      @click="() => onClickMethod('alphabet')"
      :class="currentMethod === 'alphabet' && 'bg-red-500 text-white'"
    >
      Alphabet
    </button>
  </div>
</template>

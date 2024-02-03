<script>
export default {
  name: 'BrowseMethods',
  emits: ['changeBrowseMethod'],
  props: {
    currentMethod: 'search' || 'category' || 'country' || 'ingredient'
  },
  methods: {
    onClickMethod(name) {
      this.$emit('changeBrowseMethod', name)
    }
  }
}
</script>

<template>
  <div class="flex w-full justify-center *:border-b *:border-red-500 *:px-3 *:py-1 lg:gap-3">
    <button
      @click="() => onClickMethod('search')"
      :class="
        (currentMethod === 'search' || currentMethod === 'alphabet') && 'bg-red-500 text-white'
      "
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
      @click="() => onClickMethod('ingredient')"
      :class="currentMethod === 'ingredient' && 'bg-red-500 text-white'"
    >
      Ingredient
    </button>
  </div>
</template>
